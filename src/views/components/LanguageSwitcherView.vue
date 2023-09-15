<template lang="pug">
.language-switcher-view
  template(v-if="size === 'md'")
    ui-dropdown(:title="$t('language.locale')")
      ui-button(
        v-for="item in dropdownItems"
        :key="item.locale"
        theme="primary"
        @click="setLanguage($i18n, item.locale)"
      ) {{ item.title }}

  template(v-if="size === 'sm'")
    ui-dropdown(
      :title="$i18n.locale"
      :size="size")
      ui-button(
          v-for="item in dropdownItems"
          :key="item.locale"          
          p0
          @click="setLanguage($i18n, item.locale)"
        ) {{ item.locale }}

  template(v-if="size === 'xs'")    
    ui-button(
      p0
      :text="$i18n.locale"
      @click="toggleLanguage($i18n)")
</template>

<script setup lang="ts">
import { LanguageLocale } from '@/entities/enums';
import { useMainStore } from '@/store';
import { LanguageSwitcherDropdownItems } from '@/entities/constants';
import type { II18n, ILanguageSwitcherDropDownItem } from '@/types';
import { ref } from 'vue';

interface ILanguageSwitcherViewProps {
  size?: 'md' | 'sm' | 'xs';
}

withDefaults(defineProps<ILanguageSwitcherViewProps>(), {
  size: 'md',
});

const mainStore = useMainStore();

const dropdownItems = ref<ILanguageSwitcherDropDownItem[]>(LanguageSwitcherDropdownItems);

function setLanguage($i18n: II18n, lang: LanguageLocale) {
  $i18n.locale = lang;
  mainStore.setLanguage(lang);
}

function toggleLanguage($i18n: II18n) {
  $i18n.locale = $i18n.locale === LanguageLocale.ENG ? LanguageLocale.RUS : LanguageLocale.ENG;
}
</script>

<style></style>
