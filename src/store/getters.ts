import { LanguageLocale } from "../entities/enums";
import { IMainStore } from "./types";

export const getters = {
  getLanguage: (state: IMainStore): string => {
    return state.language === LanguageLocale.ENG ? 'Eng' : 'Rus';
  },
};
