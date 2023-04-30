import { twMerge } from "tailwind-merge";

const BlueprintLabel = ({
  label,
  className = "text-shark-50",
  as = "h2",
}: {
  label: string;
  className?: string;
  as: keyof JSX.IntrinsicElements;
}) => {
  const As: any = as;

  return (
    <As
      className={twMerge(
        "spacing uppercase text-[10px] font-semibold mb-2 tracking-wider",
        className
      )}
    >
      {label}
    </As>
  );
};

export default BlueprintLabel;
