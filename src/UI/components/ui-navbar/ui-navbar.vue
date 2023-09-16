<template lang="pug">
nav.ui-navbar
  ul(
    v-if="items"
    class="ui-navbar__list"
  )
    li(
      v-for="item in items"
      :key="item.id"
      )
      button(
        :key="item.id"
        :class="['ui-navbar__list-item-btn', {'ui-navbar__list-item-btn--active': checkActiveRoute(item.path)}]"
        @click="() => changePath(item.path)"
        ) {{ $t(item.tname) || item.title }}
</template>

<script setup lang="ts">
import type { IUiNavbarItem } from './types';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

export interface IUiNavbarProps {
  items?: IUiNavbarItem[];
}

defineProps<IUiNavbarProps>();
const emit = defineEmits<{(e: 'change-path', path: string): void}>();

function changePath(path: string) {
  router.push(path);
  emit('change-path', path);
}

function checkActiveRoute(path: string): boolean {
  return route.path === path;
}
</script>

<style lang="scss">
.ui-navbar {
  --ui-navbar-item-color: var(--navbar-font-color);
  --ui-navbar-item-hover-color: var(--navbar-font-hover-color);

  height: 100%;

  &__list {
    height: 100%;
    display: flex;
    align-items: center;
    column-gap: 16px;
  }

  &__list-item-btn {
    @include btn-reset();
    padding: 10px 8px;
    font-size: 18px;
    color: var(--ui-navbar-item-color);
    border-bottom: 2px solid transparent;
    transition: all 0.25s;

    &:hover {
      color: var(--navbar-font-hover-color);
    }
    &:active {
      transform: scale(0.95);
    }

    &--active {
      border-color: var(--navbar-font-hover-color);

      &:active {
        transform: scale(1);
      }
    }
  }
}
</style>
