export type UploadResponse = {
  document_id: number;
  filename: string;
  status: string;
};

export type Citation = {
  document_id?: number | null;
  filename: string;
  page?: number | null;
  snippet: string;
};

export type ChatResponse = {
  answer: string;
  citations: Citation[];
  confidence: string;
};

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  citations?: Citation[];
  confidence?: string;
};

export type FeedbackPayload = {
  question: string;
  answer: string;
  rating: "up" | "down";
  correction?: string;
  document_id?: number;
};