import React from "react";
import { FadeIn, FadeInStagger } from "../FadeIn";

interface SocialLinksListProps {
  links?: {
    id: string;
    title: string;
    href: string;
  }[];
}

const socialMediaLinks = [
  {
    id: "3ef95a95-82b7-4562-89b2-1d8b6a7dcac9",
    title: "Twitter",
    href: "/",
  },
  {
    id: "ae88bb0d-644a-4d4a-9efc-6807fd7b3dc4",
    title: "Instagram",
    href: "/",
  },
  {
    id: "6ec06999-4878-4a64-924d-33b1e7525a42",
    title: "Linkedin",
    href: "/",
  },
];

export default function SocialLinksList({ links }: SocialLinksListProps) {
  return (
    <div>
      <FadeInStagger>
        <FadeIn>
          <h6 className="text-muted-foreground">Find us on social media.</h6>
        </FadeIn>
        <ul>
          {socialMediaLinks.map((link, index: number) => (
            <li key={index}>
              <FadeIn>
                <a href={link.href} className="text-primary hover:underline">
                  {link.title}
                </a>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </div>
  );
}
