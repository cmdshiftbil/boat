let alreadyTested = false;
let passiveSupported = false;

const fn = () => { };

const isSupported = () => {
  if (alreadyTested) return passiveSupported;
  alreadyTested = true;
  let opts: any;

  // Test via a getter in the options object to see if the passive property is accessed
  try {
    opts = Object.defineProperty({}, "passive", {
      get: () => {
        passiveSupported = true;
      }
    });
    window.addEventListener("test", fn, opts);
  } catch (e) {
    return passiveSupported;
  }
  window.removeEventListener("test", fn, opts);
  return passiveSupported;
};

const passiveEvent = () => {
  return isSupported() ? { passive: true } : false;
};

export { passiveEvent };
