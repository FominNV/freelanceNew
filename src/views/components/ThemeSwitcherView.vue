<template lang="pug">
div.theme-switcher-view
  svg-icon(
    :class="lightIconClassName"
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
    :class="darkIconClassName"
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

const lightIconClassName = computed<ClassPropsType>(() => [
  'theme-switcher-view__icon',
  { 'theme-switcher-view__icon--active': theme.value === LayoutTheme.LIGHT },
]);
const darkIconClassName = computed<ClassPropsType>(() => [
  'theme-switcher-view__icon',
  { 'theme-switcher-view__icon--active': theme.value === LayoutTheme.DARK },
]);

function changeTheme(value: LayoutTheme) {
  mainStore.setLayoutTheme(value);
}
</script>

<style lang="scss">
.theme-switcher-view {
  --theme-switcher-view-icon-color-active: var(--theme-switcher-icon-color-active);
  --theme-switcher-view-icon-color-passive: var(--theme-switcher-icon-color-passive);

  display: flex;
  align-items: center;
  column-gap: 2px;

  &__icon {
    path {
      color: var(--theme-switcher-view-icon-color-passive);
    }

    &--active {
      path {
        color: var(--theme-switcher-view-icon-color-active);
      }
    }
  }
}
</style>
