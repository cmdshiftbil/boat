import { HTMLAttributes } from "react";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";

interface PostImageProps
  extends HTMLAttributes<HTMLDivElement>,
    Pick<BlogPost, "slug"> {
  imageUrl?: string;
  hasLink?: boolean;
  isInline?: boolean;
}

const PostImage = ({
  imageUrl,
  slug,
  className,
  hasLink = true,
  isInline,
}: PostImageProps) => {
  return imageUrl ? (
    <div
      className={classNames(
        "relative w-full mt-8",
        {
          "md:w-3/5 lg:w-2/5": isInline,
        },
        className
      )}
    >
      {hasLink ? (
        <Link href={`/blog/${slug}`} className="relative">
          <Image
            src={imageUrl}
            alt=""
            className="aspect-[16/9] w-full bg-gray-100 border-[2px] border-black object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            width={1000}
            height={1000}
          />
        </Link>
      ) : (
        <div className="relative">
          <Image
            src={imageUrl}
            alt=""
            className="aspect-[16/9] w-full bg-gray-100 border-[2px] border-black object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            width={1000}
            height={1000}
          />
        </div>
      )}
      {/* <div className="absolute transition-all duration-500 border-2 border-black -top-[20px] -right-[20px] w-full h-full -z-10"></div> */}
    </div>
  ) : null;
};

export default PostImage;
