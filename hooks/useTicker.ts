import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "react-use";
export default function useTicker(callback: () => void, paused?: boolean) {
  useIsomorphicLayoutEffect(() => {
    if (!paused && callback) {
      gsap.ticker.add(callback);
    }

    return () => {
      gsap.ticker.remove(callback);
    };
  }, [callback, paused]);
}
