import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type WorkspaceHeaderProps = {
  documentCount: number;
};

export function WorkspaceHeader({ documentCount }: WorkspaceHeaderProps) {
  return (
    <Card>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Workspace
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Upload files, ask questions, and review citation-backed answers.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="info">
            {documentCount} document{documentCount === 1 ? "" : "s"} loaded
          </Badge>
          <Badge variant="success">System ready</Badge>
        </div>
      </div>
    </Card>
  );
}