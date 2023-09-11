<template lang="pug">
layout-switcher(:layout="layout")
  slot
</template>

<script setup lang="ts">

interface IPageViewProps {
  /** Шаблон */
  layout?: "default"
}

defineProps<IPageViewProps>();
</script>
