from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "DocuQuery AI Backend"
    debug: bool = True

    openai_api_key: str

    chroma_dir: str = "./data/chroma"
    upload_dir: str = "./data/uploads"
    database_url: str = "sqlite:///./data/app.db"

    embedding_model: str = "text-embedding-3-small"
    chat_model: str = "gpt-4o-mini"

    top_k: int = 5
    max_file_size_mb: int = 10

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )


settings = Settings()