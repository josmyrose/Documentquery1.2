import type { ChatResponse, FeedbackPayload, UploadResponse } from "@/types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

async function parseError(response: Response): Promise<string> {
  try {
    const data = await response.json();
    return data?.detail || "Request failed";
  } catch {
    const text = await response.text();
    return text || "Request failed";
  }
}

export async function uploadDocument(file: File): Promise<UploadResponse> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_BASE_URL}/upload/`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  return response.json();
}

export async function askQuestion(
  question: string,
  documentIds: number[]
): Promise<ChatResponse> {
  const response = await fetch(`${API_BASE_URL}/chat/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question,
      document_ids: documentIds,
    }),
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  return response.json();
}

export async function submitFeedback(payload: FeedbackPayload): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/feedback/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }
}