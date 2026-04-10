import * as React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

function variantClasses(variant: ButtonVariant) {
  switch (variant) {
    case "secondary":
      return "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50";
    case "ghost":
      return "bg-transparent text-slate-700 hover:bg-slate-100";
    case "danger":
      return "bg-red-600 text-white hover:bg-red-700";
    case "primary":
    default:
      return "bg-slate-900 text-white hover:bg-slate-800";
  }
}

function sizeClasses(size: ButtonSize) {
  switch (size) {
    case "sm":
      return "h-9 px-3 text-sm";
    case "lg":
      return "h-12 px-5 text-sm";
    case "md":
    default:
      return "h-10 px-4 text-sm";
  }
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center rounded-xl font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses(variant),
        sizeClasses(size),
        className,
      ].join(" ")}
      {...props}
    />
  );
}