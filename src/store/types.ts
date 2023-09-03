import { LanguageLocale, LayoutTheme } from "../entities/enums";

export interface IMainStore {
  language: LanguageLocale,
  layoutTheme: LayoutTheme,
}
