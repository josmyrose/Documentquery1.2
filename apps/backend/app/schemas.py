from pydantic import BaseModel,EmailStr
from typing import List, Optional


class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    email: EmailStr
    is_active: bool
    is_verified: bool
    role: str

    class Config:
        from_attributes = True

class TokenPair(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"

class LoginRequest(BaseModel):
    email: EmailStr
    password: str




class UserLogin(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

class UploadResponse(BaseModel):
    document_id: int
    filename: str
    status: str


class CitationOut(BaseModel):
    document_id: Optional[int]
    filename: str
    page: Optional[int]
    snippet: str


class ChatRequest(BaseModel):
    question: str
    document_ids: Optional[List[int]] = None


class ChatResponse(BaseModel):
    answer: str
    citations: List[CitationOut]
    confidence: str


class FeedbackRequest(BaseModel):
    question: str
    answer: str
    rating: str
    correction: Optional[str] = None
    document_id: Optional[int] = None


class FeedbackResponse(BaseModel):
    message: str
    feedback_id: int


class SummaryRequest(BaseModel):
    document_id: int


class SummaryResponse(BaseModel):
    summary: str
    citations: List[CitationOut]