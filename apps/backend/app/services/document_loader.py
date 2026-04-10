from pathlib import Path
from typing import List, Dict, Any
from pypdf import PdfReader
from docx import Document as DocxDocument


def load_pdf(file_path: str) -> List[Dict[str, Any]]:
    reader = PdfReader(file_path)
    pages = []

    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        if text.strip():
            pages.append(
                {
                    "text": text,
                    "page": i + 1,
                }
            )

    return pages


def load_docx(file_path: str) -> List[Dict[str, Any]]:
    doc = DocxDocument(file_path)
    text = "\n".join([p.text for p in doc.paragraphs if p.text.strip()])
    return [{"text": text, "page": None}] if text.strip() else []


def load_txt(file_path: str) -> List[Dict[str, Any]]:
    text = Path(file_path).read_text(encoding="utf-8", errors="ignore")
    return [{"text": text, "page": None}] if text.strip() else []


def load_document(file_path: str, content_type: str) -> List[Dict[str, Any]]:
    suffix = Path(file_path).suffix.lower()

    if suffix == ".pdf":
        return load_pdf(file_path)
    if suffix == ".docx":
        return load_docx(file_path)
    if suffix == ".txt":
        return load_txt(file_path)

    raise ValueError(f"Unsupported file type: {suffix}")