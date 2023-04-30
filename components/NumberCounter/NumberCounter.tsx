import { useEffect } from "react";

import type { NumberCounterProps } from "./NumberCounter.interface";
import {
  Number,
  NumberCounterLabel,
  NumberCounterWrapper,
} from "./NumberCounter.styles";

const NumberCounter = ({
  number,
  label,
  numberPrefix,
  numberSuffix,
}: NumberCounterProps) => {
  const count = null;
  const rounded = null;

  return (
    <NumberCounterWrapper>
      <div className="flex flex-row items-center">
        {numberPrefix && <span>{numberPrefix}</span>}
        <Number>{rounded}</Number>
        {numberSuffix && <span>{numberSuffix}</span>}
      </div>
      <NumberCounterLabel>{label}</NumberCounterLabel>
    </NumberCounterWrapper>
  );
};

export default NumberCounter;
