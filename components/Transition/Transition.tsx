import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useContext, useRef } from "react";
import {
  SwitchTransition,
  TransitionGroup,
  Transition as TransitionBase,
  CSSTransition,
} from "react-transition-group";
import TransitionContext from "./Transition.provider";

const Transition = ({ children, route }: any) => {
  const pathname = usePathname();
  const { toggleCompleted } = useContext(TransitionContext);

  const onEnterHandler = (node: any) => {
    toggleCompleted(false);

    if (!node) {
      return;
    }

    gsap.set(node, { opacity: 0, y: 100 });

    gsap
      .timeline({
        paused: true,
        onComplete: () => toggleCompleted(true),
      })
      .to(node, { opacity: 1, duration: 1, ease: "power3.out" })
      // .to(node, { y: 0, duration: 0.25 })
      .play();
  };

  const onExitHandler = (node: any) => {
    toggleCompleted(false);
    if (!node) {
      return;
    }
    gsap
      .timeline({ paused: true, onComplete: () => toggleCompleted(true) })
      .to(node, { opacity: 0, duration: 1, ease: "power3.out" })
      .play();
  };

  return (
    <TransitionGroup>
      <TransitionBase
        key={pathname}
        timeout={500}
        in={true}
        mountOnEnter
        unmountOnExit
        onEnter={onEnterHandler}
        onExit={onExitHandler}
      >
        {children}
      </TransitionBase>
    </TransitionGroup>
  );
};

export default Transition;
