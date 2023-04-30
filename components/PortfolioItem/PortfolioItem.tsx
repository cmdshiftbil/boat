import Link from "next/link";
import gsap from "gsap";
import { useMemo, useRef } from "react";
import useGsapEffect from "@/hooks/useGsapEffect";
import Nearby from "@/lib/near";
import { lineEq } from "@/utils/math.utils";

const distanceThreshold = { min: 0, max: 250 };
const blurInterval = { from: 6, to: 0 };
const scaleInterval = { from: 1.02, to: 1 };

const PorfolioItem = ({ title, image, year, location, slug }: any) => {
  const ref = useRef<any>();
  const imageRef = useRef<any>();

  const Near = useMemo(() => Nearby, []);

  useGsapEffect(() => {
    if (![ref.current, imageRef.current].some(Boolean)) return;

    const nearby = new Near(ref.current, {
      onProgress: (distance: any) => {
        const s = lineEq(
          scaleInterval.from,
          scaleInterval.to,
          distanceThreshold.max,
          distanceThreshold.min,
          distance
        );
        const b = lineEq(
          blurInterval.from,
          blurInterval.to,
          distanceThreshold.max,
          distanceThreshold.min,
          distance
        );

        gsap.to(imageRef.current, {
          ease: "Power2.easeOut",
          scale: Math.min(s, scaleInterval.from),
          filter: `blur(${Math.min(b, blurInterval.from)}px)`,
        });
      },
    });

    return () => {
      nearby.destroy();
    };
  }, ref);

  return (
    <Link href={slug}>
      <figure
        ref={ref}
        className="relative m-0 overflow-hidden grid grid-rows-full grid-cols-full aspect-[0.8]"
      >
        <div>
          <div
            ref={imageRef}
            className="w-full h-full bg-cover"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>

        <figcaption className="absolute h-full flex flex-col justify-between p-6">
          <h3 className="text-shark-50 text-5xl font-bold">{title}</h3>
          <h4 className="text-pampas-600 text-base font-bold">
            {location}, {year}
          </h4>
        </figcaption>
      </figure>
    </Link>
  );
};

export default PorfolioItem;
