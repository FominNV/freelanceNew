<template lang="pug">
.language-switcher-view
  ui-dropdown(:title="$t('language.locale')")
    ui-button(
      v-for="item in dropdownItems"
      :key="item.locale"
      @click="setLanguage($i18n, item.locale)"
    ) {{ item.title }}
</template>

<script setup lang="ts">
import { LanguageLocale } from '@/entities/enums';
import { useMainStore } from '@/store';
import { LanguageSwitcherDropdownItems } from '@/entities/constants';
import type { II18n, ILanguageSwitcherDropDownItem } from '@/types';
import { ref } from 'vue';

const mainStore = useMainStore();

const dropdownItems = ref<ILanguageSwitcherDropDownItem[]>(LanguageSwitcherDropdownItems);

function setLanguage($i18n: II18n, lang: LanguageLocale) {
  $i18n.locale = lang;
  mainStore.setLanguage(lang);
}
</script>

<style></style>
