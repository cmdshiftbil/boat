import Text from "@/components/Text";
import Title from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function CallToActionSection() {
  return (
    <section className="flex flex-col items-center">
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-12">
            <Title as="h2" className="font-bold tracking-tight">
              We are known by the company we keep.
            </Title>
            <Text className=" mx-auto mt-6 text-xl md:text-2xl" animate>
              Trusted by over 50 brands, our project porfolio is a curated
              collection of our finest projects, showcasing the fusion of
              creativity, craftsmanship, and functionality. Step inside and
              explore a world where imagination meets precision, where every
              detail is meticulously crafted to enhance the essence of retail
              spaces.
            </Text>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/projects"
                className={buttonVariants({ variant: "link", size: "lg" })}
              >
                View all projects
              </Link>
              <Link
                href="/contanct"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                Let&apos;s Talk <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
