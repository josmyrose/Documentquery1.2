import {
  BookOpen,
  Quote,
  Search,
  Sparkles,
  Upload,
  FileText,
  type LucideIcon,
} from "lucide-react";

export type IconItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: IconItem[] = [
  {
    icon: Upload,
    title: "Upload Research Papers",
    description:
      "Bring in PDFs, reports, and technical documents so users can explore them in one place.",
  },
  {
    icon: Search,
    title: "Ask Natural Questions",
    description:
      "Let researchers ask questions in plain language instead of manually scanning long papers.",
  },
  {
    icon: Quote,
    title: "Get Grounded Citations",
    description:
      "Return answers with supporting evidence so users can trace each insight back to the source.",
  },
  {
    icon: BookOpen,
    title: "Summarize Key Findings",
    description:
      "Highlight important points, methods, and conclusions faster during literature review.",
  },
];

export const productTools: IconItem[] = [
  {
    icon: Upload,
    title: "Document Upload",
    description:
      "Upload research papers, reports, and PDFs into a single workspace for analysis.",
  },
  {
    icon: Search,
    title: "Paper Search",
    description:
      "Search across uploaded documents to find concepts, methods, results, and evidence faster.",
  },
  {
    icon: Quote,
    title: "Research Chat",
    description:
      "Ask natural questions and receive grounded answers with citation support.",
  },
  {
    icon: BookOpen,
    title: "Insight Extraction",
    description:
      "Pull out key findings, limitations, and summaries from long academic documents.",
  },
  {
];