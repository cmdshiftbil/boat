import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "react-use";

export default function useGsapEffect(
  callback: any,
  ref: any,
  deps: any[] = []
) {
  useIsomorphicLayoutEffect(() => {
    let context = gsap.context(callback, ref);

    return () => context.revert();
  }, [...deps]);
}
