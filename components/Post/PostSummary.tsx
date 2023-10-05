"use client";

import Link from "next/link";
import classNames from "classnames";
import ReactTimeAgo from "react-time-ago";

import PostImage from "./PostImage";
import { FadeIn } from "../FadeIn";
import Title from "../Title";

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
    <article className="flex flex-col md:flex-row items-start justify-between gap-4 mb-16">
      <div className="flex items-center gap-x-4 text-xs">
        <FadeIn>
          {/* Time */}
          <time
            dateTime={publishedOnDate.toLocaleDateString()}
            className="text-gray-500"
          >
            <ReactTimeAgo date={publishedOnDate} locale="en-US" />
          </time>
        </FadeIn>
      </div>
      <div className="group relative">
        <FadeIn>
          <Title as="h3">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </Title>
        </FadeIn>
        {/* Mobile Image */}
        {/* <FadeIn>
            <PostImage
              isInline
              className="md:hidden mt-10 mb-10"
              slug={slug}
              imageUrl={image?.url}
            />
          </FadeIn> */}
        <FadeIn>
          <p className="mt-2 text-lg">
            {shortenedExcerpt}
            {shortenedExcerpt.length !== originalExcerpt.length ? "..." : ""}
          </p>
        </FadeIn>
      </div>

      {/* Desktop Image */}
      <PostImage
        isInline
        className="order-1"
        slug={slug}
        imageUrl={image?.url}
      />
    </article>
  );
};
export default PostSummary;
