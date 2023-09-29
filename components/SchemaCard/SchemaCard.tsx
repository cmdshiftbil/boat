import { cn } from "@/lib/utils";
import React from "react";
import { PlusIcon } from "./PlusIcon";

type SchemaCardProps = {
  containerClassName?: string;
  className?: string;
  children?: React.ReactNode;
  maxWidth?: boolean;
} & (
  | {
      grid?: true;
      isFirst: boolean;
      isLast: boolean;
    }
  | {
      grid?: false;
      isFirst?: boolean;
      isLast?: boolean;
    }
);

export default function SchemaCard({
  className,
  children,
  containerClassName,
  maxWidth = true,
  grid,
  isFirst,
  isLast,
}: SchemaCardProps) {
  const renderPlanSymbols = () => {
    console.log("isFirst", isFirst);
    console.log("isLast", isLast);

    if (grid && isFirst) {
      return (
        <>
          <PlusIcon className="absolute h-6 w-6 -top-3 -left-3 text-white stroke-caramel-300" />
          <PlusIcon className="absolute h-6 w-6 -bottom-3 -left-3 text-white stroke-caramel-300" />
        </>
      );
    }

    if (grid && isLast) {
      return (
        <>
          <PlusIcon className="absolute h-6 w-6 -top-3 -right-3 text-white stroke-caramel-300" />
          <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 text-white stroke-caramel-300" />
        </>
      );
    }

    if (!grid) {
      return (
        <>
          <PlusIcon className="absolute h-6 w-6 -top-3 -left-3 text-white stroke-caramel-300" />
          <PlusIcon className="absolute h-6 w-6 -bottom-3 -left-3 text-white stroke-caramel-300" />
          <PlusIcon className="absolute h-6 w-6 -top-3 -right-3 text-white stroke-caramel-300" />
          <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 text-white stroke-caramel-300" />
        </>
      );
    }
  };

  return (
    <div
      className={cn(
        "border border-caramel-900/50 flex flex-col items-start  mx-auto p-4 relative h-[30rem] justify-end w-full",
        containerClassName,
        maxWidth && "max-w-sm"
      )}
    >
      {renderPlanSymbols()}

      {/* <GridCard title={`${position + 1}`} /> */}

      <div
        className={cn("pb-6 pt-4 flex flex-col gap-6 w-full h-full", className)}
      >
        {children}
      </div>
    </div>
  );
}
