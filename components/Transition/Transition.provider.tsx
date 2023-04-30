import React, { createContext } from "react";
import { useState } from "react";

const TransitionContext = createContext<any>({ completed: false });

export const TransitionProvider = ({ children }: any) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = (value: boolean) => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider
      value={{
        toggleCompleted,
        completed,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
