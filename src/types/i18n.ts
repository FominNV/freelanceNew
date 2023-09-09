import { LanguageLocale } from "@/entities/enums";

export interface II18n {
  availableLocales: LanguageLocale[];
  fallbackLocale: LanguageLocale;
  locale: LanguageLocale;
}
