"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { PlusIcon } from "./PlusIcon";
import { CustomDomComponent, motion } from "framer-motion";

type SchemaCardProps = {
  containerClassName?: string;
  className?: string;
  children?: React.ReactNode;
  maxWidth?: boolean;
  padding?: boolean;
  isMotion?: boolean;
  style?: any;
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
  padding = true,
  isMotion = false,
  grid,
  isFirst,
  isLast,
  ...props
}: SchemaCardProps) {
  const Div = isMotion ? motion.div : "div";

  const renderPlanSymbols = () => {
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
    <Div
      className={cn(
        "border border-caramel-900/50 flex flex-col items-start  mx-auto relative h-full justify-end w-full",
        containerClassName,
        maxWidth && "max-w-sm",
        padding && "p-4"
      )}
      {...props}
    >
      {renderPlanSymbols()}

      {/* <GridCard title={`${position + 1}`} /> */}

      <div
        className={cn(
          "flex flex-col gap-6 w-full h-full",
          padding && "pb-6 pt-4",
          className
        )}
      >
        {children}
      </div>
    </Div>
  );
}
