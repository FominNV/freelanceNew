<template lang="pug">
div.theme-switcher-view
  svg-icon(
    class="theme-switcher-view__icon-light"
    type="mdi"
    :path="mdiWhiteBalanceSunny"
    size="24"
  )
  ui-switch(
    :value="theme"
    :falseValue="lightTheme"
    :trueValue="darkTheme"    
    @change="changeTheme"
  )
  svg-icon(
    class="theme-switcher-view__icon-dark"
    type="mdi"
    :path="mdiMoonWaningCrescent"
    size="24"
  )
</template>

<script setup lang="ts">
import { LayoutTheme } from '@/entities/enums';
import { useMainStore } from '@/store';
import { computed } from 'vue';
import { mdiWhiteBalanceSunny, mdiMoonWaningCrescent } from '@mdi/js';

const mainStore = useMainStore();

const darkTheme = LayoutTheme.DARK;
const lightTheme = LayoutTheme.LIGHT;
const theme = computed<LayoutTheme>(() => mainStore.layoutTheme);

function changeTheme(value: LayoutTheme) {
  mainStore.setLayoutTheme(value);
}
</script>

<style lang="scss">
.theme-switcher-view {
  --theme-switcher-view-icon-color-dark: var(--theme-switcher-icon-color-dark);
  --theme-switcher-view-icon-color-light: var(--theme-switcher-icon-color-light);

  display: flex;
  align-items: center;
  column-gap: 2px;

  &__icon-dark {
    path {
      color: var(--theme-switcher-view-icon-color-dark);
    }
  }

  &__icon-light {
    path {
      color: var(--theme-switcher-view-icon-color-light);
    }
  }
}
</style>
