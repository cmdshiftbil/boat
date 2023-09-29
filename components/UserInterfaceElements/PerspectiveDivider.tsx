import gsap from "gsap";
import * as React from "react";
import useGsapEffect from "@/hooks/useGsapEffect";

function PerspectiveDivider(props: React.SVGProps<SVGSVGElement>) {
  const ref = React.useRef(null);

  useGsapEffect((self: any) => {
    const lines = self.selector(".line");

    const tl = gsap.timeline({
      defaults: { duration: 3, ease: "none" },
      scrollTrigger: {
        // trigger: ".perspective-divider",
        trigger: document.body,
        // scroller: document.body,
        // scrub: 10,

        start: "top top",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.set(lines, { y: -200, opacity: 0 });
    tl.to(lines, {
      y: 0,
      opacity: 1,
      duration: 0.2,
      ease: "power4.inOut",
      stagger: 0.1,
    });

    tl.reversed(!tl.reversed());

    // return () => {
    //   self.kill();
    // };
  }, ref);

  return (
    <div ref={ref}>
      <svg
        width="100%"
        height="259"
        viewBox="0 0 648 259"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="perspective-divider"
      >
        <path
          className="line"
          d="M645.819 257.52H0.871094"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 36.04H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 12.5698H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 17.3599H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 22.77H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 4.49023H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 8.31006H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 189.62H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 44.3003H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 28.9399H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 1.04004H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 54.02H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 65.6299H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 149.03H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 79.7402H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 97.2603H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="line"
          d="M646.51 119.6H0.734375"
          stroke="#AA8455"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );

  return (
    <div ref={ref} className="w-full">
      <div id="perspective-divider" className="w-full h-96">
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
        <span className="line block border-b border-shark-50 w-full h-[1px]" />
      </div>
    </div>
  );
}

export default PerspectiveDivider;
