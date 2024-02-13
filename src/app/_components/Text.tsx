// TODO: Set up CVA

export type Font = "primary" | "secondary";
export type Size =
  | "text-displayL"
  | "text-displayM"
  | "text-displayS"
  | "text-headerL"
  | "text-headerM"
  | "text-headerS"
  | "text-headerXS"
  | "text-labelL"
  | "text-labelM"
  | "text-labelS"
  | "text-textL"
  | "text-textM"
  | "text-textS";

export default function Text({
  children,
  className,
  size = "text-textM",
}: {
  children: React.ReactNode;
  className?: string;
  size?: Size;
}) {
  const isLabel =
    size === "text-labelL" || size === "text-labelM" || size === "text-labelS";
  return (
    <span
      className={`${className ? className : "text-primaryText font-montrealMono"} ${size} ${
        isLabel ? "font-ibmPlexMono" : "font-abcRepro"
      }
      `}
    >
      {children}
    </span>
  );
}
