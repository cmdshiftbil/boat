"use client";
import Link from "next/link";
import gsap from "gsap";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import useGsapEffect from "@/hooks/useGsapEffect";
import Nearby from "@/lib/near";
import { lineEq } from "@/utils/math.utils";

const borderInterval = { from: 0.5, to: 1 };
const graphicInterval = { from: 60, to: 0 };
const textInterval = { from: 0, to: -20 };
const grayscaleInterval = { from: 1, to: 0 };
const distanceThreshold = { min: 20, max: 100 };

const Button = ({ to, className, children, ...props }: any) => {
  const ref = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);

  const Tag = to ? Link : "div";

  useGsapEffect((self: any) => {
    if (![ref.current, iconRef.current, textRef.current].some(Boolean)) return;

    const button = self.selector(".an-button")[0];
    const text = self.selector(".an-button-text")[0];
    const icon = self.selector(".an-button-icon")[0];

    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "Power2.easeOut",
      },
    });

    tl.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );

    const nearby = new Nearby(button, {
      onProgress: (distance: any) => {
        const border = lineEq(
          borderInterval.from,
          borderInterval.to,
          distanceThreshold.max,
          distanceThreshold.min,
          distance
        );

        gsap.to(button, {
          duration: 0.5,
          ease: "Expo.easeOut",
          opacity: `${Math.max(
            Math.min(border, borderInterval.to),
            borderInterval.from
          )}`,
        });

        const tx = lineEq(
          graphicInterval.from,
          graphicInterval.to,
          distanceThreshold.max,
          distanceThreshold.min,
          distance
        );

        gsap.to(icon, {
          duration: 0.5,
          ease: "Expo.easeOut",
          x: `${Math.min(tx, graphicInterval.from)}`,
        });

        const txText = lineEq(
          textInterval.from,
          textInterval.to,
          distanceThreshold.max,
          distanceThreshold.min,
          distance
        );
        const bw = lineEq(
          grayscaleInterval.from,
          grayscaleInterval.to,
          distanceThreshold.max,
          distanceThreshold.min,
          distance
        );

        gsap.to(text, {
          duration: 0.5,
          ease: "Expo.easeOut",
          x: `${Math.min(txText, graphicInterval.to)}`,
          filter: `grayscale(${Math.min(bw, grayscaleInterval.from)})`,
        });
      },
    });

    return () => {
      nearby.destroy();
    };
  }, ref);

  return (
    <button
      ref={ref}
      {...props}
      className={twMerge("overflow-hidden bg-shark-900", className)}
    >
      <Tag
        {...(to && { href: to })}
        className="an-button group flex justify-center items-center text-lg py-6 px-12 overflow-hidden border-2 border-shark-50 transition-colors hover:bg-pampas-50"
      >
        <span
          ref={textRef}
          //  className="iconbutton__text"
          className="an-button-text margin-0 text-shark-50 bg-gradient-to-r from-shark-50 to-pampas-200 bg-clip-text text-transparent group-hover:from-pampas-400 group-hover:to-pampas-800 transition-colors clamp-text-lg"
        >
          {children}
        </span>
        <span
          ref={iconRef}
          className="an-button-icon absolute right-5 top-0 flex h-full items-center"
          style={{
            transform: "translate3D(60px, 0, 0)",
          }}
        >
          <svg
            className="rotate-180 group-hover:rotate-0 stroke-pampas-50 group-hover:stroke-pampas-900 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
        <div className="iconbutton__border"></div>
      </Tag>
    </button>
  );
};

export default Button;
