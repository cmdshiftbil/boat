"use client";

import Link from "next/link";
import classNames from "classnames";
import ReactTimeAgo from "react-time-ago";

import PostImage from "./PostImage";
import { FadeIn } from "../FadeIn";
import Title from "../Title";
import { Button } from "../ui/button";
import Image from "next/image";

interface PostSummaryProps extends BlogPost {
  className?: string;
}
const PostSummary = ({
  id,
  title,
  slug,
  image,
  excerpt,
  content,
  className,
  publishedOn,
}: PostSummaryProps) => {
  const publishedOnDate = new Date(publishedOn);
  const originalExcerpt = excerpt
    .map((p) => p.children?.[0].text ?? "")
    .join(" ");
  const shortenedExcerpt = originalExcerpt.substring(0, 400);

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-4 p-6">
        <FadeIn>
          <time
            dateTime={publishedOnDate.toLocaleDateString()}
            className="text-gray-500"
          >
            <ReactTimeAgo date={publishedOnDate} locale="en-US" />
          </time>
        </FadeIn>

        <FadeIn>
          <Title as="h3">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </Title>
        </FadeIn>

        <FadeIn>
          <p className="mt-2 text-lg">
            {shortenedExcerpt}
            {shortenedExcerpt.length !== originalExcerpt.length ? "..." : ""}
          </p>
        </FadeIn>
        <FadeIn>
          <Button variant="outline">Read More</Button>
        </FadeIn>
      </div>

      <Image
        src={image?.url ?? ""}
        alt=""
        className="order-first md:order-last h-full w-full"
        // className="aspect-[16/9] w-full bg-gray-100 border-[2px] border-black object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        width={1000}
        height={1000}
      />
    </article>
  );
};
export default PostSummary;
