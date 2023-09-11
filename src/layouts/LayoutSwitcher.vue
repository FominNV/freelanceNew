<template lang="pug">
component(:is="layout")
  slot
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { PageLayouts } from '@/entities/enums';
import DefaultLayout from './DefaultLayout.vue';
import LoginLayout from './LoginLayout.vue';

const route = useRoute();

const layout = computed<any>(() => {
  switch (route.meta.layout) {
  case PageLayouts.DefaultLayout: {
    return  DefaultLayout;
  }
  case PageLayouts.LoginLayout: {
    return  LoginLayout;
  }
  default: {
    return  DefaultLayout;
  }
  }
});
</script>
