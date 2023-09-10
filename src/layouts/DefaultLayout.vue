<template lang="pug">
div.default-layout(:class="themeClassName")
  header-view
  main-view
    slot
  footer-view
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useMainStore } from '@/store';

const mainStore = useMainStore();

const themeClassName = computed<string>(() => `theme--${mainStore.layoutTheme}`);
</script>

<style lang="scss">
* {
    --font-color: var(--font-color-primary);

    color: var(--font-color);
  }

.default-layout {
  --default-layout-gradient-background-color-primary: var(--body-background-color-primary);
  --default-layout-gradient-background-color-secondary: var(--body-background-color-secondary);

  transition-property: background-color;
  transition-duration: 0.5s;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(var(--default-layout-gradient-background-color-primary) 50%, var(--default-layout-gradient-background-color-secondary));
}
</style>
