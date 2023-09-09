<template lang="pug">
header.header-view
  ui-container
    div.header-view__content
      div.header-view__lobby        
        ui-text-animater(text="Get it")
        div.header-view__job-buttons
          ui-button(
            v-for="item in jobButtons"
            :key="item.tname"
            :theme="item.theme"
            shadow
          ) {{ $t(item.tname) }}
        
      ui-navbar(:items="navbarItems")
      div.header-view__settings
        theme-switcher-view
        language-switcher-view
</template>

<script setup lang="ts">
import type { IUiNavbarItem } from '@ui/components/ui-navbar/types';
import { HeaderJobButtons, HeaderNavbarItems } from '@/entities/constants';
import ThemeSwitcherView from './ThemeSwitcherView.vue';
import LanguageSwitcherView from './LanguageSwitcherView.vue';
import { ref } from 'vue';
import type { IItemDto } from '@/types';

const navbarItems = ref<IUiNavbarItem[]>(HeaderNavbarItems);
const jobButtons = ref<IItemDto[]>(HeaderJobButtons);
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

  &__lobby {
    display: flex;
    align-items: center;
    column-gap: 32px;
  }

  &__job-buttons {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }

  &__settings {
    display: flex;
    align-items: center;
    column-gap: 32px;
  }
}
</style>
