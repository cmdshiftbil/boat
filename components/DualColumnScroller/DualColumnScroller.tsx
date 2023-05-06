import useGsapEffect from "@/hooks/useGsapEffect";
import gsap from "gsap";
import { useRef } from "react";
import LeftPanelContent from "./LeftPanelContent";
import RightPanelContent from "./RightPanelContent";

const DualColumnScroller = ({ content }: any) => {
  const ref = useRef<HTMLElement>(null);

  useGsapEffect((self: any) => {
    const pinWrapper = self.selector(".pin-wrapper")[0];
    const scrollWrapper = self.selector(".scroll-wrapper")[0];
    const leftPanel = self.selector(".left-panel")[0];
    const rightPanel = self.selector(".right-panel")[0];
    const leftPanels = self.selector(".left-panel-content");
    const rightPanels = self.selector(".right-panel-content");

    const getToValue = () => -(rightPanel.scrollHeight - window.innerHeight);

    leftPanel.style.height = `${scrollWrapper.offsetHeight}px`;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".wrapper",
          endTrigger: rightPanel,
          scroller: document.body,
          pin: true,
          start: "top top",
          end: () => "+=" + -getToValue(),
          invalidateOnRefresh: true,
          anticipatePin: 1,
          scrub: 1,
          // markers: true,
        },
      })
      .to(".right-panel", {
        y: getToValue(),
        ease: "none",
      });

    gsap.set(leftPanels, { opacity: 0, scale: 0 });
    leftPanels.forEach((panel: any, index: number) => {
      const marker = panel.dataset.leftPanelMarker;
      const currentPanel = rightPanels[index];

      gsap
        .timeline({
          scrollTrigger: {
            trigger: `[data-right-panel-marker="${Number(marker)}"]`,
            endTrigger: ".left-panel",
            scroller: document.body,
            start: "top center",
            end: () => "+=" + currentPanel.offsetHeight,
            toggleActions: "play reverse play reverse",
            // markers: true,
          },
        })
        .to(
          panel,
          {
            opacity: 1,
            scale: 1,
            ease: "circ.inOut",
          },
          "+=0.3"
        );
    });

    return () => {
      self.kill();
    };
  }, ref);

  return (
    <section ref={ref}>
      <div className="wrapper h-screen">
        <div className="pin-wrapper px-6 py-24 sm:px-12 sm:py-32 h-full">
          <div className="scroll-wrapper relative grid grid-cols-1 md:grid-cols-2 justify-center border border-shark-50 h-full overflow-hidden">
            <div className="left-panel relative h-full border-r border-shark-50 md:flex justify-center items-center flex-col bg-grid-perspective bg-no-repeat bg-cover hidden ">
              {content.map((item: any, index: number) => {
                return (
                  <LeftPanelContent index={item.id} key={item.id}>
                    {item.leftPanel}
                  </LeftPanelContent>
                );
              })}
            </div>

            <div className="right-panel relative  flex flex-col justify-center items-center">
              {content.map((item: any, index: number) => {
                return (
                  <RightPanelContent index={item.id} key={item.id}>
                    {item.rightPanel}
                  </RightPanelContent>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualColumnScroller;
