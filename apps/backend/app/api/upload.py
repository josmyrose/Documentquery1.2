from pathlib import Path
import shutil
from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
from sqlalchemy.orm import Session

from app.config import settings
from app.db import get_db
from app.models import Document
from app.schemas import UploadResponse
from app.services.document_loader import load_document
from app.services.chunking import chunk_pages
from app.services.vector_store import add_chunks_to_vector_store

router = APIRouter(prefix="/upload", tags=["upload"])


ALLOWED_EXTENSIONS = {".pdf", ".docx", ".txt"}


@router.post("/", response_model=UploadResponse)
async def upload_document(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    suffix = Path(file.filename).suffix.lower()
    if suffix not in ALLOWED_EXTENSIONS:
        raise HTTPException(status_code=400, detail="Unsupported file type.")

    contents = await file.read()
    max_size = settings.max_file_size_mb * 1024 * 1024
    if len(contents) > max_size:
        raise HTTPException(status_code=400, detail="File too large.")

    upload_dir = Path(settings.upload_dir)
    upload_dir.mkdir(parents=True, exist_ok=True)

    saved_path = upload_dir / file.filename

    with open(saved_path, "wb") as f:
        f.write(contents)

    document = Document(
        filename=file.filename,
        content_type=file.content_type or "application/octet-stream",
        file_path=str(saved_path),
        status="processed",
    )
    db.add(document)
    db.commit()
    db.refresh(document)

    pages = load_document(str(saved_path), document.content_type)
    if not pages:
        raise HTTPException(status_code=400, detail="No readable text found.")

    chunks = chunk_pages(
        pages=pages,
        filename=document.filename,
        document_id=document.id,
    )
    add_chunks_to_vector_store(chunks)

    return UploadResponse(
        document_id=document.id,
        filename=document.filename,
        status=document.status,
    )