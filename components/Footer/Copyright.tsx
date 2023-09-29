import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { FadeIn, FadeInStagger } from "../FadeIn";

export default function Copyright() {
  return (
    <div>
      <FadeInStagger>
        <FadeIn>
          <p className="text-muted-foreground text-md">
            © {new Date().getFullYear()} Alpha Nero. All rights reserved.
          </p>
        </FadeIn>
        <FadeIn>
          <div>
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy
            </Link>
            <span className="text-muted-foreground"> • </span>
            <Link href="/terms" className="text-primary hover:underline">
              Terms
            </Link>
          </div>
        </FadeIn>
        <FadeIn>
          <a
            href="https:/barryandjamie.com"
            className="text-muted-foreground text-sm"
          >
            Barry & Jamie Studio
          </a>
        </FadeIn>
      </FadeInStagger>
    </div>
  );
}
