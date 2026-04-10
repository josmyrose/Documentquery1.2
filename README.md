# 🧠 DocuMind AI — Document Intelligence with RAG

DocuMind AI is a full-stack AI application that enables users to upload documents (PDFs) and ask natural language questions to extract insights, summaries, and citation-backed answers.

It leverages Retrieval-Augmented Generation (RAG) to combine semantic search with LLM reasoning, making it suitable for research, legal, and enterprise document workflows.

---

## 🚀 Features

* 📄 Upload and process PDF documents
* 🔍 Semantic search using vector embeddings (ChromaDB)
* 🤖 Question answering over documents
* 📚 Citation-backed responses (with source snippets)
* ⚡ FastAPI backend with scalable architecture
* 🎨 Modern frontend (Next.js + Tailwind CSS)

---

## 🏗️ Architecture

```text
User Query
   ↓
Frontend (Next.js UI)
   ↓
FastAPI Backend
   ↓
Chunking + Embeddings (Sentence Transformers)
   ↓
Vector Store (ChromaDB)
   ↓
Relevant Context Retrieval
   ↓
LLM (GPT / HuggingFace)
   ↓
Answer + Citations
```

---

## 🧠 Tech Stack

**Frontend**

* Next.js (App Router)
* TypeScript
* Tailwind CSS

**Backend**

* FastAPI
* Python
* LangChain

**AI / Data**

* Sentence Transformers (Embeddings)
* ChromaDB (Vector Database)
* OpenAI / HuggingFace (LLM)

---

## ⚙️ Setup

```bash
# Backend
cd apps/backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend
cd apps/frontend
npm install
npm run dev
```

---

## 📌 Use Cases

* Research paper analysis
* Legal document understanding
* Knowledge base querying
* Enterprise document search

---

## 🧠 Key Highlights

* Built end-to-end RAG pipeline from scratch
* Designed modular backend services (vector store, QA service)
* Implemented citation-based retrieval for transparency
* Focused on production-ready structure and scalability

---
## 🧠 Key Highlights
...

## 🇩🇪 Why This Project Matters   👈 ADD HERE
This project demonstrates practical experience in:
- Building production-ready GenAI systems  
- Implementing RAG pipelines for document intelligence  
- Working with modern full-stack technologies  
- Designing scalable AI architectures  

Aligned with real-world use cases in insurance, legal tech, and enterprise AI.


## 📷 Demo

*(Add screenshots or demo video here)*

---

## 📄 License

MIT License
