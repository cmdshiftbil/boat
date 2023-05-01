// 588x332

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Bricks } from "@/lib/bricks/src";
import { RichText } from "@/lib/bricks/src/RichText";
import { formatDate } from "@/utils/date.utils";
import Text from "../Text";

const Post = ({
  id,
  title,
  slug,
  body,
  date,
  author,
  featuredImage,
  content,
  className,
  publishedDate,
  layout,
}: any) => {
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <img
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={publishedDate} className="text-gray-500">
            {publishedDate}
          </time>
          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
          >
            Marketing
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={slug}>
              <span className="absolute inset-0"></span>
              {title}
            </Link>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
            <Bricks layout={layout} />
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="h-10 w-10 rounded-full bg-gray-100"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                {author.name}
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
