export type Variant = "primary" | "secondary" | "tertiary";

export default function Button({
  children,
  type = "primary",
  className,
  disabled,
}: {
  children: React.ReactNode;
  type?: Variant;
  className?: string;
  disabled?: boolean;
}) {
  const buttonVariants = {
    primary: "bg-accentPrimary h-6 text-primaryBg hover:bg-secondaryBg disabled:bg-accentPrimary disabled:cursor-not-allowed",
    secondary: "border-textPrimary border",
    tertiary: "",
  };

  const defaultClass = "p-2 rounded-lg flex items-center align-middle disabled:opacity-50";
  return (
    <button
      className={`${defaultClass} ${buttonVariants[type]} ${
        className && className
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
