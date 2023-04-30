import { useContext } from "react";
import { TransitionContext } from "@/context/Transition.context";

export default function useTransition(): any {
  return useContext(TransitionContext);
}
