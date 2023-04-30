import { useRef } from "react";

const EMPTY = {};

export default function useInstance(value = {}) {
  const ref = useRef(EMPTY);
  if (ref.current === EMPTY) {
    ref.current = typeof value === "function" ? value() : value;
  }

  return ref.current;
}
