from fastapi import APIRouter, Depends
from app.schemas import ChatRequest, ChatResponse
from app.services.qa_service import answer_question
from app.core.deps import get_current_user  # NEW

router = APIRouter(prefix="/chat", tags=["chat"])


@router.post("/", response_model=ChatResponse)
def chat_with_documents(
    payload: ChatRequest,
    user=Depends(get_current_user),  # 🔐 PROTECTED
):
    result = answer_question(
        question=payload.question,
        document_ids=payload.document_ids,
    )

    return ChatResponse(**result)