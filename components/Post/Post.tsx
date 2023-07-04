"use client";

import classNames from "classnames";
import ReactTimeAgo from "react-time-ago";
import { FadeIn } from "../Animations";
import PostImage from "./PostImage";
import "./index.css";
import RichText from "@/components/RichText";
interface PostProps extends BlogPost {
  className?: string;
}
const Post = ({
  id,
  title,
  slug,
  image,
  content,
  className,
  publishedOn,
}: PostProps) => {
  const publishedOnDate = new Date(publishedOn);

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
          imageUrl={image?.url}
          hasLink={false}
        />

        <div>
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            {/* Time */}
            <time
              dateTime={publishedOnDate.toLocaleDateString()}
              className="text-gray-500"
            >
              <ReactTimeAgo date={publishedOnDate} locale="en-US" />
            </time>
          </div>
          <div className="group relative">
            <h1 className="mt-3 text-5xl leading-[60px] font-semibold text-gray-900 group-hover:text-gray-600">
              {title}
            </h1>
            {/* <RichText content={content} className={classes.content} /> */}
            {content[0]?.blogContentFields?.richText && (
              <RichText
                className="text-xl"
                content={content[0]?.blogContentFields?.richText}
              />
            )}
          </div>
        </div>
      </article>
    </FadeIn>
  );
};
export default Post;
