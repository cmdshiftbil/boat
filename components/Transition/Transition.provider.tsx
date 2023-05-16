import { createContext } from "react";
import { gsap } from "gsap";
import { useState } from "react";

const TransitionContext = createContext<any>({ completed: false });

export const TransitionProvider = ({ children }: any) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  );

  // const [completed, setCompleted] = useState(false);

  // const toggleCompleted = (value: boolean) => {
  //   setCompleted(value);
  // };

  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
      }}

      // value={{
      //   toggleCompleted,
      //   completed,
      // }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
