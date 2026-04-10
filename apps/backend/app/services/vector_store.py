from langchain.schema import Document
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from app.config import settings


def get_vector_store():
    embeddings = HuggingFaceEmbeddings(
        model_name="all-MiniLM-L6-v2"
    )

    return Chroma(
        persist_directory=settings.chroma_dir,
        embedding_function=embeddings,
    )


def add_chunks_to_vector_store(chunks):
    vector_store = get_vector_store()

    documents = []
    for chunk in chunks:
        documents.append(
            Document(
                page_content=chunk["text"],
                metadata=chunk["metadata"],
            )
        )

    vector_store.add_documents(documents)