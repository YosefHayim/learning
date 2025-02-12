import { create } from "zustand";

interface countStore {
  count: number;
  increase: (state: number) => void;
  decrease: (state: number) => void;
  reset: (v: number) => void;
}

const countStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: (v: number) => set({ count: v }),
}));

export default countStore;
