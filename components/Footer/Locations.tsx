import React from "react";
import { FadeIn, FadeInStagger } from "../FadeIn";

interface LocationsProps {
  locations: {
    name: string;
    address: string;
  }[];
}

export default function Locations({ locations }: LocationsProps) {
  return (
    <FadeInStagger faster>
      <ul className="space-y-4">
        {locations.map((location, index: number) => (
          <li key={index}>
            <FadeIn>
              <h6 className="text-primary">{location.name}</h6>
            </FadeIn>
            <FadeIn>
              <p className="text-muted-foreground text-md">
                {location.address}
              </p>
            </FadeIn>
          </li>
        ))}
      </ul>
    </FadeInStagger>
  );
}
