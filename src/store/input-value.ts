import { create } from "zustand";

type InputValueStore = {
  value: string;
  setValue: (value: string) => void;
};

export const useInputValue = create<InputValueStore>((set) => ({
  value: "",
  setValue: (value: string) => set({ value }),
}));
