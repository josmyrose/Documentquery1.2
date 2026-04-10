from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db import get_db
from app.schemas import SummaryRequest, SummaryResponse
from app.services.summary_service import summarize_document

router = APIRouter(prefix="/summary", tags=["summary"])


@router.post("/", response_model=SummaryResponse)
def get_document_summary(
    payload: SummaryRequest,
    db: Session = Depends(get_db),
):
    try:
        result = summarize_document(db, payload.document_id)
        return SummaryResponse(**result)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))