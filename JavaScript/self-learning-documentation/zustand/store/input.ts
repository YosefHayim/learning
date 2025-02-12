import { create } from "zustand";

interface InputStore {
  firstName: string;
  lastName: string;
  updateFName: (newValue: string) => void;
  updateLName: (newValue: string) => void;
}

const useInputStore = create<InputStore>((set) => ({
  firstName: "placeholder first name",
  lastName: "placeholder last name",
  updateFName: (newValue) => set(() => ({ firstName: newValue })), // ✅ Type-safe
  updateLName: (newValue) => set(() => ({ lastName: newValue })), // ✅ Type-safe
}));

export default useInputStore;
