<template lang="pug">
header.header-view
  ui-container
    div.header-view__content
      ui-text-animater(text="Get it")
      ui-navbar(:items="navbarItems")
      div.header-view__settings
        theme-switcher-view
        language-switcher-view
</template>

<script setup lang="ts">
import type { IUiNavbarItem } from '@ui/components/ui-navbar/types';
import { HeaderNavbarItems } from '@/entities/constants';
import ThemeSwitcherView from './ThemeSwitcherView.vue';
import LanguageSwitcherView from './LanguageSwitcherView.vue';
import { ref } from 'vue';

const navbarItems = ref<IUiNavbarItem[]>(HeaderNavbarItems);
</script>

<style lang="scss">
.header-view {
  --header-view-height: var(--header-height);

  height: var(--header-view-height);

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__settings {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }
}
</style>
