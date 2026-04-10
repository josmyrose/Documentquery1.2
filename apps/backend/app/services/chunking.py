from typing import List, Dict, Any
from langchain_text_splitters import RecursiveCharacterTextSplitter


def chunk_pages(
    pages: List[Dict[str, Any]],
    filename: str,
    document_id: int,
) -> List[Dict[str, Any]]:
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=800,
        chunk_overlap=120,
    )

    chunks: List[Dict[str, Any]] = []

    for page_item in pages:
        page_text = page_item["text"]
        page_number = page_item.get("page")

        split_texts = splitter.split_text(page_text)

        for idx, chunk_text in enumerate(split_texts):
            chunks.append(
                {
                    "text": chunk_text,
                    "metadata": {
                        "document_id": document_id,
                        "filename": filename,
                        "page": page_number,
                        "chunk_index": idx,
                    },
                }
            )

    return chunks