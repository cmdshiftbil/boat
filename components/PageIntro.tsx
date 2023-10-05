import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";
import Title from "./Title";

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
  className,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <Container
      className={cn(
        "mt-24 sm:mt-32 lg:mt-40",
        centered && "text-center",
        className
      )}
    >
      <FadeIn>
        <Title>
          <span className="block font-display text-lg font-semibold text-caramel-500">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={cn(
              "mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl",
              centered && "mx-auto"
            )}
          >
            {title}
          </span>
        </Title>
        <div
          className={cn(
            "mt-6 max-w-3xl text-xl text-neutral-600",
            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  );
}
