import { create } from "zustand";

export const useStore = create((set, get: any) => ({
  headerData: undefined,
  setHeaderData: (headerData: any) => set({ headerData }),
  footerData: undefined,
  setFooterData: (footerData: any) => set({ footerData }),
  navIsOpen: false,
  setNavIsOpen: (toggle: any) => set({ navIsOpen: toggle, overflow: !toggle }),
  triggerTransition: "",
  setTriggerTransition: (triggerTransition: any) => set({ triggerTransition }),
}));
