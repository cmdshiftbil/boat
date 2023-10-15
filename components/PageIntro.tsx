import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { cn } from "@/lib/utils";
import Title from "./Title";

export function PageIntro({
  title,
  subTitle,
  description,
  children,
}: {
  title: string;
  subTitle?: string;
  description: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <FadeInStagger className={"space-y-4 mb-12"}>
      <FadeIn>
        <Title>{title}</Title>
      </FadeIn>
      {subTitle && (
        <FadeIn>
          <Title as="h3">{subTitle}</Title>
        </FadeIn>
      )}
      {description && (
        <FadeIn>
          <p className="text-3xl text-caramel-100 font-normal">{description}</p>
        </FadeIn>
      )}
      {children}
    </FadeInStagger>
  );
}
