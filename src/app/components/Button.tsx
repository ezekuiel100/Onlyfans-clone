type ButtonProps = {
  children: string;
  variante?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
};

export default function Button({
  children,
  variante = "primary",
  size = "md",
  disabled = false,
}: ButtonProps) {
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline:
      "bg-white border text-blue-400 hover:bg-blue-100/25 hover:border-blue-500",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      disabled={disabled}
      className={`${variants[variante]} ${sizes[size]} ${disabledStyles} font-semibold rounded-full uppercase transition-all `}
    >
      {children}
    </button>
  );
}
