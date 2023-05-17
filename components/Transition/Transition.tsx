import { useContext, useRef, useState } from "react";
import TransitionContext from "./Transition.provider";
import { useIsomorphicLayoutEffect } from "react-use";
import { useRouter } from "next/router";

const Transition = ({ children, route }: any) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState({
    route: router.asPath,
    children,
  });
  const { timeline } = useContext(TransitionContext);
  const el = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (currentPage.route !== router.asPath) {
      if (timeline.duration() === 0) {
        console.log("no outro animations!!!?!?!?");
        /* There are no outro animations, so immediately transition */
        setCurrentPage({
          route: router.asPath,
          children,
        });
      } else {
        timeline.play().then(() => {
          /* outro complete so reset to an empty paused timeline */
          timeline.seek(0).pause().clear();
          // timeline.pause().clear();
          setCurrentPage({
            route: router.asPath,
            children,
          });
        });
      }
    }
  }, [router.asPath]);

  return <div ref={el}>{currentPage.children}</div>;
};

export default Transition;
