import type { Message } from "@/types";
import { CitationList } from "@/components/features/citation-list";
import { FeedbackButtons } from "@/components/features/feedback-buttons";

type MessageListProps = {
  messages: Message[];
};

export function MessageList({ messages }: MessageListProps) {
  let lastUserQuestion = "";

  if (!messages.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-500">
        Upload a document and ask a question to start the conversation.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => {
        if (message.role === "user") {
          lastUserQuestion = message.content;
        }

        return (
          <article
            key={message.id}
            className={
              message.role === "user"
                ? "ml-auto max-w-3xl rounded-2xl bg-slate-900 p-5 text-white shadow-sm"
                : "mr-auto max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
            }
          >
            <div className="mb-3 flex items-center justify-between">
              <p
                className={
                  message.role === "user"
                    ? "text-xs font-semibold uppercase tracking-wide text-slate-300"
                    : "text-xs font-semibold uppercase tracking-wide text-slate-500"
                }
              >
                {message.role === "user" ? "You" : "Assistant"}
              </p>

              {message.role === "assistant" && message.confidence && (
                <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
                  Confidence: {message.confidence}
                </span>
              )}
            </div>

            <p
              className={
                message.role === "user"
                  ? "whitespace-pre-wrap text-sm leading-7 text-white"
                  : "whitespace-pre-wrap text-sm leading-7 text-slate-700"
              }
            >
              {message.content}
            </p>

            {message.role === "assistant" && (
              <>
                <CitationList citations={message.citations ?? []} />
                <FeedbackButtons
                  question={lastUserQuestion}
                  answer={message.content}
                  documentId={message.citations?.[0]?.document_id ?? undefined}
                />
              </>
            )}
          </article>
        );
      })}
    </div>
  );
}