import { useFrame } from "@studio-freight/hamo";
import { useEffect, useMemo } from "react";
import Stats from "stats.js";

const isDom = typeof document !== "undefined";

export default function useState() {
  const stats = useMemo(() => {
    if (!isDom) return {};
    return new Stats() as any;
  }, []);

  useEffect(() => {
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);

    return () => {
      stats.dom.remove();
    };
  }, [stats]);

  useFrame(() => {
    stats.begin();
  }, -Infinity);

  useFrame(() => {
    stats.end();
  }, Infinity);
}
