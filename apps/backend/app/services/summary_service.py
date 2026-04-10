from sqlalchemy.orm import Session
from app.models import Document
from app.services.vector_store import get_vector_store


def summarize_document(db: Session, document_id: int):
    document = db.query(Document).filter(Document.id == document_id).first()
    if not document:
        raise ValueError("Document not found.")

    vector_store = get_vector_store()

    docs = vector_store.similarity_search(
        "Summarize this document",
        k=5,
        filter={"document_id": document_id},
    )

    if not docs:
        raise ValueError("No indexed content found for this document.")

    summary_parts = []
    citations = []

    for doc in docs[:5]:
        snippet = doc.page_content[:300].strip()
        summary_parts.append(doc.page_content[:500].strip())

        citations.append(
            {
                "document_id": doc.metadata.get("document_id"),
                "filename": doc.metadata.get("filename"),
                "page": doc.metadata.get("page"),
                "snippet": snippet,
            }
        )

    combined_text = "\n\n".join(summary_parts)

    summary = combined_text[:1200].strip()

    return {
        "summary": summary,
        "citations": citations,
    }