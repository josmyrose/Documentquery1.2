from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db import get_db
from app.schemas import FeedbackRequest, FeedbackResponse
from app.services.feedback_service import store_feedback

router = APIRouter(prefix="/feedback", tags=["feedback"])


@router.post("/", response_model=FeedbackResponse)
def submit_feedback(
    payload: FeedbackRequest,
    db: Session = Depends(get_db),
):
    if payload.rating not in {"up", "down"}:
        raise HTTPException(status_code=400, detail="Rating must be 'up' or 'down'.")

    feedback = store_feedback(
        db=db,
        question=payload.question,
        answer=payload.answer,
        rating=payload.rating,
        correction=payload.correction,
        document_id=payload.document_id,
    )

    return FeedbackResponse(
        message="Feedback stored successfully.",
        feedback_id=feedback.id,
    )