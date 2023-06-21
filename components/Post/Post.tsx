"use client";

import Link from "next/link";
import classNames from "classnames";
import ReactTimeAgo from "react-time-ago";
import { FadeIn } from "../Animations";
import PostImage from "./PostImage";
import DOMPurify from "dompurify";
import "./index.css";
interface PostProps extends BlogPost {
  className?: string;
}
const Post = ({
  id,
  title,
  slug,
  date,
  featuredImage,
  excerpt,
  content,
  className,
  publishedDate,
}: PostProps) => {
  const cleanContent = DOMPurify.sanitize(content);

  return (
    <FadeIn
      key={id}
      animate={{
        y: 250,
      }}
    >
      <article
        className={classNames(
          "flex flex-col items-start justify-between gap-4 mb-16",
          className
        )}
      >
        {/* Desktop Image */}
        <PostImage
          className="w-full"
          slug={slug}
          imageUrl={featuredImage}
          hasLink={false}
        />

        <div>
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            {/* Time */}
            <time
              dateTime={publishedDate.toLocaleDateString()}
              className="text-gray-500"
            >
              <ReactTimeAgo date={publishedDate} locale="en-US" />
            </time>
          </div>
          <div className="group relative">
            <h1 className="mt-3 text-5xl leading-[60px] font-semibold text-gray-900 group-hover:text-gray-600">
              {title}
            </h1>
            {/* Mobile Image */}
            <PostImage
              className="md:hidden mt-10 mb-10"
              slug={slug}
              imageUrl={featuredImage}
            />
            <p
              className="mt-2 text-2xl post-content"
              dangerouslySetInnerHTML={{ __html: cleanContent }}
            ></p>
          </div>
        </div>
      </article>
    </FadeIn>
  );
};
export default Post;
