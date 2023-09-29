"use client";
import Counter from "@/components/Counter";
import DualColumnScroller from "@/components/DualColumnScroller";
import content from "@/content/content";
import { useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

const RightPanel = ({ value, label }: any) => {
  const x = useMotionValue(0);
  const input = [0, value];
  const output = [0, 900];
  const bold = useTransform(x, input, output);

  return (
    <div className="relative flex justify-center items-center flex-col text-center h-full w-full">
      <h1 className="text-9xl font-bold text-caramel-50">
        {/* <span className="font-extrabold text-caramel-500">/</span> */}
        <Counter value={value} fontWeight={bold.get()} />
      </h1>

      <p className="text-6xl text-caramel-300 font-bold ">{label}</p>
    </div>
  );
};

const TeamScrollSection = () => {
  const teamMembers = content.teamCounters.map((team, index) => {
    return {
      id: index,
      leftPanel: (
        <div className="flex justify-center items-center flex-col">
          <Image
            src={team.image}
            width={200}
            height={350}
            placeholder="blur"
            blurDataURL={team.image}
            alt={team.label}
          />
          {/* `${team.label}`, */}
        </div>
      ),
      rightPanel: <RightPanel value={team.number} label={team.label} />,
    };
  });

  return <DualColumnScroller content={teamMembers} />;
};

export default TeamScrollSection;
