import useMobileDetect from "@/hooks/useMobileDetect";
import { cn } from "@/utils/tailwind.utils";
import { Fragment } from "react";
import LinearGradient from "../LinearGradient";
import { MagicCard, MagicContainer } from "../MagicCard/MagicCard";
import Marquee from "../Marquee/Marque";

export default function CountriesList({ countries, onSelectCountry }: any) {
  const { isMobile } = useMobileDetect();

  const selectCountry = (country: any) => () => {
    onSelectCountry(country);
  };

  const ShouldMarquee = true ? Marquee : Fragment;

  return (
    <MagicContainer
      className={
        cn()
        // "flex justify-end flex-col",
        // "h-96"
        //   "grid rid-flow-row-dense grid-cols-1 gap-4 auto-rows-max",
        //   // Md breakpoint
        //   "sm:grid-cols-2",
        //   // Md breakpoint
        //   "md:grid-cols-3",
        //   // Md breakpoint
        //   "lg:grid-cols-4",
        //   // Md breakpoint
        //   "xl:grid-cols-5"
      }
    >
      <ShouldMarquee className={cn("overflow-x-auto")}>
        {countries.map((country: any) => {
          return (
            <MagicCard
              key={country.lat}
              onMouseEnter={selectCountry(country)}
              onClick={selectCountry(country)}
              onEnterViewport={selectCountry(country)}
              className={cn(
                "snap-center",
                "p-4 flex-1",
                "border border-caramel-500",
                "flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl"
              )}
            >
              <p className="z-10 clamp-text-2xl font-medium flex gap-4 px-8">
                <span className="font-bold text-caramel-500">/</span>{" "}
                <span className="text-caramel-100 z-50">{country.name}</span>
              </p>
              {/* <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_60%_120%,rgba(211,66,31,0.1),rgba(211,66,31,0.3))] opacity-25" /> */}
            </MagicCard>
          );
        })}
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-50 dark:from-gray-950"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-50 dark:from-gray-950"></div> */}
        <LinearGradient className={cn("h-1/3", "md:h-screen")} />
      </ShouldMarquee>
    </MagicContainer>
  );
}
