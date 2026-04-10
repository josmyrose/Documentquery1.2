from typing import List
from langchain_community.vectorstores import Chroma
from app.services.vector_store import get_vector_store


def answer_question(question: str, document_ids: List[int]):
    vector_store = get_vector_store()

    docs = vector_store.similarity_search(question, k=5)

    answer = "\n\n".join([doc.page_content for doc in docs])

    citations = [
        {
            "document_id": doc.metadata.get("document_id", None),
            "filename": doc.metadata.get("filename"),
            "page": doc.metadata.get("page"),
            "snippet": doc.page_content[:200],
        }
        for doc in docs
    ]

    return {
        "answer": answer,
        "citations": citations,
        "confidence": "medium",
    }