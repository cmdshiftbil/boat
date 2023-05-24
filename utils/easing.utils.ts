const easeInQuad = (t: any, b: any, c: any, d: any) => {
  t /= d;
  return c * t * t + b;
};

const easeOutQuad = (t: any, b: any, c: any, d: any) => {
  t /= d;
  return -c * t * (t - 2) + b;
};

const easeInOutQuad = (t: any, b: any, c: any, d: any) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

const easeInOutQuart = (t: any, b: any, c: any, d: any) => {
  if ((t /= d / 2) < 1) {
    return c / 2 * t * t * t * t + b;
  } else {
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  }
};

const easeInSine = (t: any, b: any, c: any, d: any) => {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};

const easeOutSine = (t: any, b: any, c: any, d: any) => {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
};

const easeInOutSine = (t: any, b: any, c: any, d: any) => {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};

export { easeInQuad, easeOutQuad, easeInOutQuad, easeInOutQuart, easeInSine, easeOutSine, easeInOutSine };
