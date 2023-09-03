import { defineStore } from 'pinia';
import { IMainStore } from './types';
import { LanguageLocale, LayoutTheme } from '../entities/enums';
import { actions } from './actions';
import { getters } from './getters';

export const useMainStore = defineStore('main', {
  state: (): IMainStore => ({
    language: LanguageLocale.RUS,
    layoutTheme: LayoutTheme.DARK,
  }),
  actions,
  getters,
});
