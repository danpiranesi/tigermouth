export type Variant = "primary" | "secondary" | "tertiary";

export default function Button({
  children,
  type = "primary",
  className,
}: {
  children: React.ReactNode;
  type?: Variant;
  className?: string;
}) {
  const buttonVariants = {
    primary: "bg-accentPrimary h-6 text-primaryBg hover:bg-secondaryBg",
    secondary: "border-textPrimary border",
    tertiary: "",
  };

  const defaultClass = "p-2 rounded-lg flex items-center align-middle";
  return (
    <button
      className={`${defaultClass} ${buttonVariants[type]} ${
        className && className
      }`}
    >
      {children}
    </button>
  );
}
