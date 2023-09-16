import { LanguageLocale, LayoutTheme } from "../entities/enums";

export const actions = {
  setLanguage(payload: LanguageLocale) {
    this.language = payload;
  },
  setLayoutTheme(payload: LayoutTheme) {
    const app: HTMLDivElement = document.querySelector('#app');
    app.classList.remove(`theme--light`);
    app.classList.remove(`theme--dark`);
    app.classList.add(`theme--${payload}`);
    this.layoutTheme = payload;
  },
};
