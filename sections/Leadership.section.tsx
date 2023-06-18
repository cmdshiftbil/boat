"use client";
import gsap from "gsap";
import Heading from "@/components/Heading";
import ParticleImage from "@/components/ParticleImage/ParticleImage";
import useGsapEffect from "@/hooks/useGsapEffect";
import classNames from "classnames";
import { HTMLAttributes, useMemo, useRef, useState } from "react";
import useMobileDevice from "@/hooks/useMobileDevice";

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
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isImageAvailable, setIsImageAvailable] = useState(false);
  const isMobile = useMobileDevice();

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
      depth: 1.0,
      size: 0.7,
    }),
    []
  );

  useGsapEffect((self: any) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".team-wrapper",
        start: isMobile ? "top 10%" : "top 5%",
        end: "+=" + team.length * 1500,
        pin: true,
        scrub: 1,
      },
    });

    team.map((person, idx) => {
      const isLastPerson = idx + 1 === team.length;
      tl.from(`.person-${idx}`, { y: innerHeight * 1 })
        .add(() => {
          setIndex(idx);
          setIsImageAvailable(true);
        })
        .to(`.person-${idx}`, { y: 0 })
        .add(() => {
          setIsImageAvailable(true);
          setIndex(idx);
        });
      if (!isLastPerson) {
        tl.to(`.person-${idx}`, { y: -1000 });
      }
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
        <div className="flex relative">
          <ParticleImage
            src={team[index].picture}
            className={classNames(
              "w-full lg:w-1/2 transition-all aspect-1 h-screen lg:h-screen pb-60 lg:pb-40 relative",
              {
                "opacity-0": !isImageAvailable,
              }
            )}
            cameraDistance={280}
            initialSettings={initialSettings}
            settings={settings}
          />
          <div className="w-full">
            {team.map((person, idx) => (
              <div
                key={idx}
                className={classNames(
                  "text-shark-50 absolute",
                  //mobile
                  "flex gap-2 justify-around w-full text-center items-end top-1/2 right-0 select-none pointer-events-none",
                  //desktop
                  "lg:block lg:text-left lg:top-1/2 lg:left-1/3 lg:right-auto lg:-translate-y-1/2",
                  `person-${idx}`
                )}
              >
                <div className="text-[40px] leading-[40px] lg:text-[123px] lg:leading-[123px] font-bold">
                  {person.name}
                </div>
                <div className="text-[35px] leading-[35px] pt-4 lg:pt-0 lg:text-[76px] lg:leading-[76px] font-light italic">
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
