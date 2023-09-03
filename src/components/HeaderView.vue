<template lang="pug">
header.header-view
  ui-container
    div.header-view__content
      ui-text-animater(text="Get it")
      ui-navbar(:items="navbarItems")
      theme-switcher-view
</template>

<script setup lang="ts">
import type { IUiNavbarItem } from '@ui/components/ui-navbar/types';
import { headerNavbarItems } from '@/entities/constants';
import ThemeSwitcherView from './ThemeSwitcherView.vue';
import { ref } from 'vue';

const navbarItems = ref<IUiNavbarItem[]>(headerNavbarItems);
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
}
</style>
