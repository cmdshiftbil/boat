import classNames from "classnames";
import { forwardRef, useEffect, useLayoutEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useMeasure } from "react-use";
import { bgToTextColor, pruneTailwindColor } from "@/utils/color.utils";

import Heading from "../Heading";
import { SectionProps } from "./Section.interface";
import SectionHeader from "../SectionHeader";
import { hasPaddingClass } from "@/utils/dom.utils";

const Section = forwardRef(
  (
    {
      className = "",
      articleClassName = "",
      children,
      headingClassName,
      title,
      header,
      colorScheme = "transparent",
      titlePlacement = "top",
    }: SectionProps,
    ref: any
  ) => {
    const [headerRef, { width, height }] = useMeasure();

    const colorSchemes = {
      transparent: {
        header: "text-shark-50",
        article: "bg-transparent",
      },
      pampas: {
        header: "text-pampas-200",
        article: "bg-pampas-200",
      },
      "pampas-dark": {
        header: "text-pampas-600",
        article: "bg-pampas-600",
      },
      shark: {
        header: "text-shark-500",
        article: "bg-shark-500",
      },
    };

    const variantClasses: any = {
      top: {
        section: "flex-col ",
        header: "",
        article: "w-full justify-start",
      },
      left: {
        section: "flex-row w-full",
        header: "[writing-mode:vertical-lr] rotate-180 py-6 items-end",
        article: "w-full -ml-[1vw] justify-center",
      },
    };

    const sectionClasses = classNames({
      flex: true,
      [variantClasses[titlePlacement].section]: true,
      // "p-4 md:p-6 lg:p-12": !hasPaddingClass(className),
    });

    return (
      <section className={twMerge(sectionClasses, className)} ref={ref}>
        {title && (
          <SectionHeader
            title={title}
            headingClassName={headingClassName}
            titlePlacement={titlePlacement}
            {...([titlePlacement === "left"].every(Boolean) && {
              underline: false,
              suffix: false,
            })}
            className={classNames({
              flex: true,
              [colorSchemes[colorScheme].header]: true,
              [variantClasses[titlePlacement].header]: true,
              "px-6 sm:px-12": !hasPaddingClass(className),
            })}
          />
        )}

        <article
          className={twMerge(
            classNames({
              "z-30": true,
              [colorSchemes[colorScheme].article]: true,
              [variantClasses[titlePlacement].article]: true,
              "px-6 sm:px-12": !hasPaddingClass(className),
            }),
            articleClassName
          )}
        >
          {children}
        </article>
      </section>
    );
  }
);

export default Section;
