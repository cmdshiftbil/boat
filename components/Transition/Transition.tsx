"use client";
import { useContext, useRef, useState } from "react";
import TransitionContext from "./Transition.provider";
import { useIsomorphicLayoutEffect } from "react-use";

const Transition = ({ children, route }: any) => {
  const [displayChildren, setDisplayChildren] = useState(null);
  const { timeline } = useContext(TransitionContext);
  const el = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        // there are no outro animations, so immediately transition
        setDisplayChildren(children);
      } else {
        timeline.play().then(() => {
          // outro complete so reset to an empty paused timeline
          timeline.seek(0).pause().clear();
          setDisplayChildren(children);
        });
      }
    }
  }, [children]);

  return <div ref={el}>{displayChildren}</div>;
};

export default Transition;
