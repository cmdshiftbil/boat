import { PageIntro } from "@/components/PageIntro";
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
        <PageIntro
          title="Let's Discuss Your Project"
          description="Get in touch with us"
        />
      </div>

      <div className={cn("flex flex-col px-2 justify-center")}>
        <span>Reach out to</span>
        <a
          href="mailto:reception@alpha-nero.com"
          className="text-caramel-500 text-lg hover:underline"
        >
          reception@alpha-nero.com
        </a>
      </div>
    </div>
  );
}
