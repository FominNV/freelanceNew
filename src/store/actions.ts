import { LanguageLocale, LayoutTheme } from "../entities/enums";

export const actions = {
  setLanguage(payload: LanguageLocale) {
    this.language = payload;
  },
  setLayoutTheme(payload: LayoutTheme) {
    const body: HTMLBodyElement = document.querySelector('body');
    body.className = `theme--${payload}`;
    this.layoutTheme = payload;
  },
};
