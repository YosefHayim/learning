import { create } from "zustand";

const countStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: (v) => set({ count: v }),
}));

export default countStore;
