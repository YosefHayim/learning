import { create } from "zustand";

const inputStore = create((set) => ({
  firstName: "placeholder first name",
  lastName: "placeholder last name",
  updateFName: (newValue) => set((state) => ({ firstName: newValue })),
  updateLName: (newValue) => set((state) => ({ lastName: newValue })),
}));

export default inputStore;
