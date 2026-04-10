import { useSyncExternalStore } from "react";

type InputValueStore = {
   value: string;
   setValue: (value: string) => void;
};

let value = "";

const listeners = new Set<() => void>();

let snapshot: InputValueStore = {
   value,
   setValue: (v: string) => setValue(v),
};

function setValue(newValue: string) {
   value = newValue;

   snapshot = {
      value,
      setValue,
   };

   for (const listener of listeners) {
      listener();
   }
}

function subscribe(listener: () => void) {
   listeners.add(listener);

   return () => listeners.delete(listener);
}

function getSnapshot() {
   return snapshot;
}

export function useInput() {
   return useSyncExternalStore(subscribe, getSnapshot);
}
