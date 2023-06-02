"use client";
import DualColumnScroller from "@/components/DualColumnScroller";
import ParticleImage from "@/components/ParticleImage/ParticleImage";
import content from "@/content/content";
import { HTMLAttributes, useMemo, useState } from "react";

interface TeamMember {
  name: string;
  position: string;
  picture: string;
}
interface LeadershipSectionProps extends HTMLAttributes<HTMLDivElement> {
  team?: TeamMember[];
}
const LeadershipSection = ({
  className,
  team = [],
}: LeadershipSectionProps) => {
  const [index, setIndex] = useState(0);
  const initialSettings = useMemo(
    () => ({
      randomize: 1.0,
      depth: 50.0,
      size: 1.0,
    }),
    []
  );
  const settings = useMemo(
    () => ({
      randomize: 1.0,
      depth: 4.0,
      size: 0.4,
    }),
    []
  );

  const handleChangeImage = () => {
    setIndex((i) => (i === 3 ? 0 : i + 1));
  };

  if (!team.length) return null;

  const person = team[index];

  return (
    <div className={className}>
      <div className="text-shark-50 cursor-pointer" onClick={handleChangeImage}>
        Change {index}
      </div>
      <div className="flex relative">
        <ParticleImage
          // src={person.picture}
          src={team[index].picture}
          className="w-1/2 aspect-1 h-auto relative"
          cameraDistance={280}
          initialSettings={initialSettings}
          settings={settings}
        />
        <div className="text-shark-50 absolute left-1/3 top-1/2 -translate-y-1/2 select-none">
          <div className="text-[123px] leading-[123px] font-bold">
            {person.name}
          </div>
          <div className="text-[76px] leading-[123px] font-light italic">
            {person.position}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
