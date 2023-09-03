import { LanguageLocale, LayoutTheme } from "../entities/enums";

export const actions = {
  setLanguage(payload: LanguageLocale) {
    this.language = payload;
  },
  setLayoutTheme(payload: LayoutTheme) {
    this.layoutTheme = payload;
  },
};
