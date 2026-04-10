from sqlalchemy.orm import Session
from app.models import Feedback


def store_feedback(
    db: Session,
    question: str,
    answer: str,
    rating: str,
    correction: str | None = None,
    document_id: int | None = None,
) -> Feedback:
    feedback = Feedback(
        question=question,
        answer=answer,
        rating=rating,
        correction=correction,
        document_id=document_id,
    )
    db.add(feedback)
    db.commit()
    db.refresh(feedback)
    return feedback


def get_relevant_corrections(db: Session, question: str, limit: int = 3):
    # Simple baseline: fetch most recent negative feedback with corrections.
    # Later you can replace with semantic similarity.
    return (
        db.query(Feedback)
        .filter(Feedback.rating == "down", Feedback.correction.isnot(None))
        .order_by(Feedback.created_at.desc())
        .limit(limit)
        .all()
    )