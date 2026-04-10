"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

type RouteButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function RouteButton({ href, children, className = "" }: RouteButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      setError(null);
      setIsLoading(true);
      router.push(href);
    } catch {
      setError("Navigation failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading} className={className}>
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
      {error ? <p className="mt-2 text-sm text-red-300">{error}</p> : null}
    </div>
  );
}