<template>
  <layout-switcher :layout="layout">
    <slot />
  </layout-switcher>
</template>

<script setup lang="ts">
import LayoutSwitcher from '../layouts/LayoutSwitcher.vue';

interface IPageViewProps {
  /** Шаблон */
  layout?: "default"
}

defineProps<IPageViewProps>();
</script>
