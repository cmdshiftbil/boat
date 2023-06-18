"use client";
import gsap from "gsap";
import Heading from "@/components/Heading";
import ParticleImage from "@/components/ParticleImage/ParticleImage";
import useGsapEffect from "@/hooks/useGsapEffect";
import classNames from "classnames";
import { HTMLAttributes, useEffect, useMemo, useRef, useState } from "react";
import useMobileDevice from "@/hooks/useMobileDevice";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
    }),
    []
  );

  useGsapEffect((self: any) => {
    const membersPanel = self.selector(".members-panel-wrapper")[0];
    const members = self.selector(".team-member");

    const getToValue = () => -(membersPanel.scrollHeight - window.innerHeight);

    console.log(getToValue());

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ref.current,
          endTrigger: membersPanel,
          scroller: document.body,
          pin: true,
          pinnedContainer: ".team-wrapper",
          pinType: "transform",
          start: "top top",
          end: () => "+=" + -getToValue(),
          invalidateOnRefresh: true,
          anticipatePin: 1,
          scrub: 1,
        },
      })
      .to(".members-panel-wrapper", {
        y: getToValue(),
        ease: "none",
      });

    team.forEach((member: any, index: number) => {
      // const marker = panel.dataset.leftPanelMarker;
      const currentPanel = members[index];

      gsap.timeline({
        scrollTrigger: {
          trigger: `[data-right-panel-marker="${Number(index)}"]`,
          endTrigger: ".particles-panel",
          scroller: document.body,
          start: "top center",
          end: () => "+=" + members[index].offsetHeight,
          toggleActions: "play reverse play reverse",
          onToggle: () => {
            console.log("toooooogle");
            setIndex(index);
          },
        },
      });
    });

    return () => {
      self.kill();
    };
  }, ref);

  if (!team.length) return null;

  return (
    <section ref={ref}>
      <header className="bg-shark-900 bg-grid-surface px-6 md:px-12 bg-cover border-b-2 border-shark-50/30 ">
        <Heading className="text-shark-50">Leadership</Heading>
      </header>
      <div className="team-wrapper h-screen">
        <div className="pin-wrapper  h-full">
          <div
            className={classNames(
              "scroll-wrapper relative grid justify-center h-full overflow-hidden",
              //mobile
              "h-full w-full grid-cols-1",
              //desktop
              "md:grid-cols-1"
            )}
          >
            <div
              className={classNames(
                "particles-panel overflow-hidden",
                //mobile
                "h-full w-full absolute top-0 left-0, z-10"
              )}
            >
              <div
                className="left-panel-content overflow-hidden h-full w-full"
                data-left-panel-marker={index}
              >
                <ParticleImage
                  src={team[index].picture}
                  className={classNames(
                    "w-full h-full transition-all relative z-0"
                  )}
                  cameraDistance={280}
                  initialSettings={initialSettings}
                  settings={settings}
                />
              </div>
            </div>
            <div
              className={classNames(
                "members-panel relative",
                //mobile
                "h-full"
                //desktop
              )}
            >
              <div
                className={classNames(
                  "members-panel-wrapper"
                  //mobile
                )}
              >
                {team.map((person, idx) => (
                  <div
                    key={idx}
                    className={classNames(
                      "team-member text-shark-50 flex justify-center items-center  ",
                      //mobile
                      "h-screen w-full text-center p-6",
                      //desktop
                      "md:h-screen",
                      `person-${idx}`
                    )}
                    data-right-panel-marker={idx}
                  >
                    <div className="relative">
                      <div className="clamp-text-5xl font-bold">
                        {person.name}
                      </div>
                      <div className="clamp-text-3xl font-light italic">
                        {person.position}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
