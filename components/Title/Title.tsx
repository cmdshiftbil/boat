import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const titleVariants = cva("text-caramel-500 font-medium", {
  variants: {
    as: {
      h1: "text-7xl sm:text-9xl",
      h2: "text-3xl sm:text-5xl",
      h3: "text-4xl sm:text-3xl",
      h4: "text-2xl sm:text-4xl",
      h5: "text-lg sm:text-xl",
      h6: "text-base sm:text-lg",
    },
  },
  defaultVariants: {
    as: "h1",
  },
});

interface TitleProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof titleVariants> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}
export default function Title({ children, as, className }: TitleProps) {
  const As = as ? as : "h1";

  return <As className={cn(titleVariants({ as }), className)}>{children}</As>;
}
