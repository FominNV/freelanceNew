import { rus } from './locales/rus';
import { eng } from './locales/eng';
import { createI18n } from 'vue-i18n';
import { LanguageLocale } from '../entities/enums';

const i18n = createI18n({
  legacy: false,
  locale: LanguageLocale.RUS,
  allowComposition: true,
  fallbackLocale: LanguageLocale.ENG,
  messages: {
    eng,
    rus,
  },
});

export default i18n;
