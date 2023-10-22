"use client";
import React, { useMemo } from "react";
import SchemaCard from "../SchemaCard/SchemaCard";
import ParticleImage from "../ParticleImage/ParticleImage";
import Title from "../Title";
import { cn } from "@/lib/utils";
import { FadeIn } from "../FadeIn";

export default function LeadershipGrid() {
  const initialSettings = useMemo(
    () => ({
      randomize: 2.0,
      depth: 30.0,
      size: 2.0,
    }),
    []
  );
  const settings = useMemo(
    () => ({
      randomize: 1.0,
      depth: 1.0,
      size: 0.7,
      color: "#ebe5d6",
    }),
    []
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          name: "Simon Hacker",
          position: "Founder & Managing Partner",
          picture: "/images/leadership/simon.png",
        },
        {
          name: "Khaled Ali",
          position: "Business Development Manager & Partner",
          picture: "/images/leadership/khaled.png",
        },
        {
          name: "Séverine Hoss",
          position: "Finance Manager",
          picture: "/images/leadership/severine.png",
        },
        {
          name: "Rajesh M.V.",
          position: "Operation Manager & Partner",
          picture: "/images/leadership/simon.png",
        },
      ].map((member, index) => {
        return (
          <FadeIn key={index}>
            <SchemaCard className="relative" maxWidth={false}>
              <FadeIn className="flex-1 relative aspect-square">
                {/* <div className="bg-caramel-500 h-full w-full absolute top-0 left-0 mix-blend-multiply" /> */}

                <ParticleImage
                  src={member.picture}
                  className={cn(
                    "w-full h-full transition-all relative z-0 flex-1"
                  )}
                  cameraDistance={280}
                  initialSettings={initialSettings}
                  settings={settings}
                />
              </FadeIn>
              <div>
                <FadeIn>
                  <Title as="h4" className="text-5xl">
                    {member.name}
                  </Title>
                </FadeIn>
                <FadeIn>
                  <p className="text-caramel-100/50 text-sm">
                    {member.position}
                  </p>
                </FadeIn>
              </div>
            </SchemaCard>
          </FadeIn>
        );
      })}
    </div>
  );
}
