function clamp(min: number, input: number, max: number): number {
  return Math.max(min, Math.min(input, max));
}

function mapRange(
  in_min: number,
  in_max: number,
  input: number,
  out_min: number,
  out_max: number
): number {
  return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

function lerp(start: number, end: number, amt: number): number {
  return (1 - amt) * start + amt * end;
}

function truncate(value: number, decimals: number): number {
  return parseFloat(value.toFixed(decimals));
}

function getScale(diffX: number, diffY: number) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  return Math.min(distance / 735, 0.35);
}

function getAngle(diffX: number, diffY: number) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

/**
 * Equation of a line.
 */
const lineEq = (
  y2: number,
  y1: number,
  x2: number,
  x1: number,
  currentVal: number
): number => {
  // y = mx + b
  var m = (y2 - y1) / (x2 - x1),
    b = y1 - m * x1;
  return m * currentVal + b;
};

const Maths = { lerp, clamp, mapRange, truncate, getScale, getAngle, lineEq };

export { lerp, clamp, mapRange, truncate, getScale, getAngle, lineEq };
export default Maths;
