import { createContext } from "react";
interface LanguageContext {
  language: string;
  setLanguage: (c: string) => void;
}
export const LanguageContext = createContext<LanguageContext>({
  language: "",
  setLanguage: () => {},
});
