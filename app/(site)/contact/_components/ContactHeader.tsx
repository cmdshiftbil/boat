import { cn } from "@/utils/tailwind.utils";
import React from "react";

export default function ContactHeader() {
  return (
    <div
      className={cn(
        "px-2 gap-4 py-10",
        "flex flex-col justify-between",
        // Tablet style
        "sm:px-8",
        // Desktop style
        "md:flex-row  md:px-12"
      )}
    >
      <div
        className={cn(
          "text-6xl flex flex-col text-caramel-100",
          // Tablet style
          "sm:text-8xl",
          // Desktop style
          "md:text-9xl"
        )}
      >
        <span>Let&apos;s Discuss</span>
        <span>Your Project</span>
      </div>

      <div className={cn("flex flex-col px-2 justify-center")}>
        <span>Reach out to</span>
        <a href="/#" className="text-caramel-500 text-lg hover:underline">
          reception@alpha-nero.com
        </a>
      </div>
    </div>
  );
}
