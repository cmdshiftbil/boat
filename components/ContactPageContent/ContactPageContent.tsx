"use client";
import { cn } from "@/utils/tailwind.utils";
import {
  BadgeInfo,
  Briefcase,
  CalendarHeart,
  Circle,
  Factory,
  FolderDot,
} from "lucide-react";
import { FadeIn, FadeInStagger } from "../FadeIn";
import HoverGrid from "../HoverGrid";
import { PageIntro } from "../PageIntro";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";

const actions: any = [
  {
    title: "Collaboration, Press & Events",
    href: "#",
    icon: CalendarHeart,
    iconForeground: "text-caramel-800",
    iconBackground: "bg-caramel-500",
    content: ["+971 4 456 7890", "marketing@alpha-nero.com"],
  },
  {
    title: "Project Enquiries",
    href: "#",
    icon: FolderDot,
    iconForeground: "text-caramel-800",
    iconBackground: "bg-caramel-500",
    content: ["+971 4 456 7890", "sales@alpha-nero.com"],
  },
  {
    title: "Careers",
    href: "#",
    icon: Briefcase,
    iconForeground: "text-caramel-800",
    iconBackground: "bg-caramel-500",
    content: ["+971 4 456 7890", "hr@alpha-nero.com"],
  },
  {
    title: "General Info",
    href: "#",
    icon: BadgeInfo,
    iconForeground: "text-caramel-800",
    iconBackground: "bg-caramel-500",
    content: ["+971 4 456 7890", "reception@alpha-nero.com"],
  },
];

const locations = [
  {
    title: "Dubai",
    href: "#",
    icon: Factory,
    iconForeground: "text-caramel-50",
    iconBackground: "bg-caramel-700",
    content:
      "Warehouse C07 1-2-3, Dubai Production City P.O. BOX 485008, Dubai, United Arab Emirates",
  },
  {
    title: "Riyadh",
    href: "#",
    icon: Factory,
    iconForeground: "text-caramel-50",
    iconBackground: "bg-caramel-700",
    content:
      "Al Fozan Industrial Park Block 50, warehouse, 555/558, Riyadh 14548, Saudi Arabia",
  },
];

export const ContactDepartments = () => {
  const [dialogContent, setDialogContent] = useState<any>(null);

  const [copiedText, copyToClipboard] = useCopyToClipboard();

  return (
    <>
      <Dialog>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-4 text-caramel-500 text-2xl flex flex-col">
              {dialogContent?.title}
              <span className="text-base text-caramel-200">Copy details</span>
            </DialogTitle>
            <DialogDescription className="flex flex-col gap-4">
              {typeof dialogContent?.content === "string" ? (
                <Button size="lg" variant="outline">
                  Copy {dialogContent?.title} address
                </Button>
              ) : (
                dialogContent?.content?.map((item: any, index: number) => {
                  return (
                    <Button
                      size="lg"
                      variant="outline"
                      key={index}
                      onClick={() => copyToClipboard(item)}
                    >
                      {item}
                      {copiedText === item ? " (copied)" : ""}
                    </Button>
                  );
                })
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>

        <FadeInStagger faster className="space-y-24 md:space-y-48">
          <section>
            <PageIntro as="h2" title="Contact" description=" " />
            <HoverGrid
              className="grid-cols-1 sm:grid-cols-2"
              id="contactLayout"
            >
              {actions.map((action: any, actionIdx: number) => (
                <DialogTrigger
                  key={action.title}
                  asChild
                  onClick={() => {
                    setDialogContent(action);
                  }}
                >
                  <div className="group relative p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-caramel-500">
                    <div>
                      <FadeIn>
                        <span
                          className={cn(
                            action.iconBackground,
                            action.iconForeground,
                            "inline-flex rounded-lg p-3 "
                          )}
                        >
                          <action.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                      </FadeIn>
                    </div>
                    <div className="mt-8">
                      <FadeIn>
                        <h3 className="text-base font-semibold leading-6 text-caramel-500">
                          <a href={action.href} className="focus:outline-none">
                            {/* Extend touch target to entire panel */}
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            {action.title}
                          </a>
                        </h3>
                      </FadeIn>

                      <p className="mt-2 text-sm text-caramel-100 space-y-1">
                        {Array.isArray(action.content) ? (
                          action.content.map((item: string) => (
                            <span key={item} className="block">
                              {item}
                            </span>
                          ))
                        ) : (
                          <span>{action.content}</span>
                        )}
                      </p>
                    </div>
                    <span
                      className="pointer-events-none absolute right-6 top-6 text-caramel-300 group-hover:text-caramel-900 hover:animate-bounce transition-colors"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                      </svg>
                    </span>
                  </div>
                </DialogTrigger>
              ))}
            </HoverGrid>
          </section>
          <section>
            <PageIntro as="h2" title="Locations" description=" " />
            <HoverGrid
              className="grid-cols-1 sm:grid-cols-2"
              id="locationLayout"
            >
              {locations.map((action: any, actionIdx: number) => (
                <DialogTrigger
                  key={action.title}
                  asChild
                  onClick={() => {
                    setDialogContent(action);
                  }}
                >
                  <div
                    key={action.title}
                    className={cn(
                      "group relative p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-caramel-500"
                    )}
                  >
                    <div>
                      <FadeIn>
                        <span
                          className={cn(
                            action.iconBackground,
                            action.iconForeground,
                            "inline-flex rounded-lg p-3 "
                          )}
                        >
                          <action.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                      </FadeIn>
                    </div>
                    <div className="mt-8">
                      <FadeIn>
                        <h3 className="text-base font-semibold leading-6 text-caramel-500">
                          <a href={action.href} className="focus:outline-none">
                            {/* Extend touch target to entire panel */}
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            {action.title}
                          </a>
                        </h3>
                      </FadeIn>

                      <p className="mt-2 text-sm text-caramel-100 space-y-1">
                        {Array.isArray(action.content) ? (
                          action.content.map((item: string) => (
                            <span key={item} className="block">
                              {item}
                            </span>
                          ))
                        ) : (
                          <span>{action.content}</span>
                        )}
                      </p>
                    </div>
                    <span
                      className="pointer-events-none absolute right-6 top-6 text-caramel-300 group-hover:text-caramel-900 hover:animate-bounce transition-colors"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                      </svg>
                    </span>
                  </div>
                </DialogTrigger>
              ))}
            </HoverGrid>
          </section>
        </FadeInStagger>
      </Dialog>
    </>
  );
};
