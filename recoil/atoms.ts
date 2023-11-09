import { atom } from "recoil";
import { TiktokenModel } from "tiktoken";

export const themeModeAtom = atom({
  key: "themeMode",
  default: "light",
});

export const selectedModelAtom = atom<any>({
  key: "selectedModel",
  default: {
    label: "gpt-4",
    value: "gpt-4",
    base: "gpt-4",
    recommended: true,
    price: { input: 0.03, output: 0.06 },
  },
});

export const promptTextAtom = atom({
  key: "promptText",
  default: "",
});
