"use client";
import { ArrowLeft, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Heading from "../Heading";
import Text from "../Text";
import { formatYear } from "@/utils/date.utils";
import MotionLine from "../MotionLine/MotionLine";
import Link from "next/link";

export default function ProjectHeading({ title, date, location }: any) {
  return (
    <header>
      <nav aria-label="Back" className="mb-6">
        <Link
          href="/projects"
          className="flex items-center text-sm font-normal text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="-ml-1 mr-4 h-5 w-5 flex-shrink-0 text-gray-400 " />
          BACK TO PROJECTS
        </Link>
      </nav>

      <div className="mt-2 flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <Heading className=" text-shark-900">{title}</Heading>
        <div className="mt-4 flex flex-col flex-shrink-0 md:ml-4 md:mt-0 justify-end text-center sm:text-right">
          <Text className="text-shark-800" fontSize="clamp-text-lg">
            <span className="sr-only">Located at:</span>
            <span>{location}</span>
          </Text>
          <Text className="text-shark-800">
            <span className="sr-only">Built year:</span>
            <span>{formatYear(date)}</span>
          </Text>
        </div>
      </div>
      <MotionLine className="my-6" />
    </header>
  );
}
