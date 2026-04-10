from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.db import Base, engine
from app.api.upload import router as upload_router
from app.api.chat import router as chat_router
from app.api.feedback import router as feedback_router
from app.api.summary import router as summary_router

from app.api.auth import router as auth_router


Path("./data").mkdir(exist_ok=True)
Path(settings.upload_dir).mkdir(parents=True, exist_ok=True)
Path(settings.chroma_dir).mkdir(parents=True, exist_ok=True)

Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.app_name, debug=settings.debug)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # replace in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(auth_router)
app.include_router(upload_router)
app.include_router(chat_router)
app.include_router(feedback_router)
app.include_router(summary_router)
@app.on_event("startup")
def check_dependencies():
    try:
        import sentence_transformers
    except ImportError:
        raise RuntimeError(
            "Missing dependency: sentence-transformers. Run `pip install -r requirements.txt`"
        )

@app.get("/")
def health_check():
    return {"message": "DocuQuery AI backend is running"}