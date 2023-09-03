<template lang="pug">
component(:is="layout")
  slot
</template>

<script setup lang="ts">
import { computed } from 'vue';

/* eslint-disable */
import DefaultLayout from './DefaultLayout.vue';
/* eslint-enable */

interface ILayoutSwitcherProps {
  /** Шаблон */
  layout?: "default"
}

const props = withDefaults(defineProps<ILayoutSwitcherProps>(), {
  layout: 'default',
});

const layout = computed<any>(() => {
  switch (props.layout) {
  default: {
    return  DefaultLayout;
  }
  }
});
</script>
