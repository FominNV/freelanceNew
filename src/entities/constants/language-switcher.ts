import { ILanguageSwitcherDropDownItem } from "@/types";
import { LanguageLocale } from "../enums";

export const LanguageSwitcherDropdownItems: ILanguageSwitcherDropDownItem[] = [
  {
    locale: LanguageLocale.ENG,
    title: 'English',
  },
  {
    locale: LanguageLocale.RUS,
    title: 'Русский',
  },
];
