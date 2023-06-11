"use client";
import gsap from "gsap";
import Heading from "@/components/Heading";
import ParticleImage from "@/components/ParticleImage/ParticleImage";
import useGsapEffect from "@/hooks/useGsapEffect";
import classNames from "classnames";
import { HTMLAttributes, useMemo, useRef, useState } from "react";

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
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
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
    setIndex((i) => (i === team.length - 1 ? 0 : i + 1));
  };
  useGsapEffect((self: any) => {
    // team.map((person, idx) => {
    //   gsap.timeline({
    //     scrollTrigger: {
    //       trigger: `.person-${idx}`,
    //       start: "bottom top",
    //       end: "+=" + innerHeight,
    //       onEnter: () => {
    //         console.log("entered", idx);
    //       },
    //     },
    //   });
    // });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".team-wrapper",
        start: "top 20%",
        end: "+=" + team.length * 1500,
        pin: true,
        scrub: 1,
      },
    });

    team.map((person, idx) => {
      tl.from(`.person-${idx}`, { y: innerHeight * 1 })
        .add(() => {
          setIndex(idx);
        })
        .to(`.person-${idx}`, { y: 0 })
        .add(() => {
          setIndex(idx);
        })
        .to(`.person-${idx}`, { y: -1000 });
    });
  }, ref);

  if (!team.length) return null;

  return (
    <div ref={ref}>
      <div
        className={classNames(
          "team-wrapper relative h-screen overflow-hidden",
          className
        )}
      >
        <Heading className="text-shark-50">Leadership</Heading>
        {/* 
          <span
            className="p-3 bg-shark-50 cursor-pointer rounded-md m-6 inline-block"
            onClick={handleChangeImage}
          >
            Next
          </span>
        */}
        <div className="pb-20" />
        <div className="flex relative">
          <ParticleImage
            src={team[index].picture}
            className="w-1/2 aspect-1 h-auto relative"
            cameraDistance={280}
            initialSettings={initialSettings}
            settings={settings}
          />
          <div className="w-full">
            {team.map((person, idx) => (
              <div
                key={idx}
                className={classNames(
                  "text-shark-50 absolute left-1/3 top-1/2 -translate-y-1/2 select-none pointer-events-none",
                  `person-${idx}`
                )}
              >
                <div className="text-[123px] leading-[123px] font-bold">
                  {person.name}
                </div>
                <div className="text-[76px] leading-[123px] font-light italic">
                  {person.position}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
