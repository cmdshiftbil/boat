import { create } from "zustand";

export const useStore = create((set: any, get: any) => ({
  headerData: undefined,
  setHeaderData: (headerData: any) => set({ headerData }),
  footerData: undefined,
  setFooterData: (footerData: any) => set({ footerData }),
  navIsOpen: false,
  setNavIsOpen: (toggle: any) => set({ navIsOpen: toggle, overflow: !toggle }),
  lenis: undefined,
  setLenis: (lenis: any) => set({ lenis }),
  overflow: true,
  setOverflow: (overflow: any) => set({ overflow }),
  triggerTransition: "",
  setTriggerTransition: (triggerTransition: any) => set({ triggerTransition }),
  thresholds: {},
  addThreshold: ({ id, value }: any) => {
    let thresholds = { ...get().thresholds };
    thresholds[id] = value;

    set({ thresholds });
  },
  // removeThreshold: (threshold) => {
  //   set({ threshold })
  // },
  introOut: false,
  setIntroOut: (introOut: any) => set({ introOut }),
}));
