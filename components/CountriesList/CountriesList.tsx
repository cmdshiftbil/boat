import useMobileDetect from "@/hooks/useMobileDetect";
import { cn } from "@/utils/tailwind.utils";
import { Fragment } from "react";
import LinearGradient from "../LinearGradient";
import { MagicCard, MagicContainer } from "../MagicCard/MagicCard";
import Marquee from "../Marquee/Marque";
import SchemaCard from "../SchemaCard/SchemaCard";

export default function CountriesList({ countries, onSelectCountry }: any) {
  const { isMobile } = useMobileDetect();

  const selectCountry = (country: any) => () => {
    onSelectCountry(country);
  };

  const ShouldMarquee = true ? Marquee : Fragment;

  return (
    <ShouldMarquee className={cn("overflow-x-auto p-8")}>
      {countries.map((country: any) => {
        return (
          <SchemaCard key={country.lat}>
            <div
              onClick={selectCountry(country)}
              //  onEnterViewport={selectCountry(country)}
            >
              <p className="z-10 clamp-text-2xl font-medium flex gap-4 px-8">
                <span className="font-bold text-caramel-500">/</span>{" "}
                <span className="text-caramel-100 z-50">{country.name}</span>
              </p>
            </div>
          </SchemaCard>
        );
      })}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-50 dark:from-gray-950"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-50 dark:from-gray-950"></div> */}
      {/* <LinearGradient className={cn("h-1/3", "md:h-screen")} /> */}
    </ShouldMarquee>
  );
}
