import * as React from "react";

type BadgeVariant = "neutral" | "success" | "warning" | "info";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
};

function badgeClasses(variant: BadgeVariant) {
  switch (variant) {
    case "success":
      return "bg-emerald-100 text-emerald-700";
    case "warning":
      return "bg-amber-100 text-amber-700";
    case "info":
      return "bg-blue-100 text-blue-700";
    case "neutral":
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export function Badge({ children, variant = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${badgeClasses(
        variant
      )}`}
    >
      {children}
    </span>
  );
}