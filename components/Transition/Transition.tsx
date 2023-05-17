import { useContext, useRef, useState } from "react";
import TransitionContext from "./Transition.provider";
import { useIsomorphicLayoutEffect } from "react-use";
import { usePathname } from "next/navigation";

const Transition = ({ children, route }: any) => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState({
    route: pathname,
    children,
  });
  const { timeline } = useContext(TransitionContext);
  const el = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (currentPage.route !== pathname) {
      if (timeline.duration() === 0) {
        console.log("no outro animations!!!?!?!?");
        /* There are no outro animations, so immediately transition */
        setCurrentPage({
          route: pathname,
          children,
        });
      } else {
        timeline.play().then(() => {
          /* outro complete so reset to an empty paused timeline */
          timeline.seek(0).pause().clear();
          // timeline.pause().clear();
          setCurrentPage({
            route: pathname,
            children,
          });
        });
      }
    }
  }, [pathname]);

  return <div ref={el}>{currentPage.children}</div>;
};

export default Transition;
