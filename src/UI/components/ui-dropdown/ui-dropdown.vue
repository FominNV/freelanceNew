<template lang="pug">
div(:class="dropdownClassName")
  label(
    class="ui-dropdown__title"
    aria-label="dropdown"
    @click="toggleCollapse"
    ) {{ title }}
    slot(name="title")
  div(:class="contentClassName")
    slot

  input(
    ref="input"
    class="ui-dropdown__input"
    @blur="onBlur"
    @focus="onFocus")
</template>

<script setup lang="ts">
import type { ClassPropsType } from '@/types';
import { computed, ref } from 'vue';

interface IUiDropdownProps {
  title?: string;
  size?: 'sm' | 'md';
}

const props = defineProps<IUiDropdownProps>();
const input = ref<HTMLInputElement | null>(null);
const collapsed = ref<boolean>(true);

const dropdownClassName = computed<ClassPropsType>(() => [
  'ui-dropdown',
  `ui-dropdown--size-${props.size}`,
]);

const contentClassName = computed<ClassPropsType>(() => [
  'ui-dropdown__content',
  {
    'ui-dropdown__content--collapsed': collapsed.value,
  },
]);

function toggleCollapse() {
  return collapsed.value ? input.value.focus() : undefined;
}

function onBlur() {
  setTimeout(() => collapsed.value = true, 150);
}

function onFocus() {
  collapsed.value = false;
}
</script>

<style lang="scss">
.ui-dropdown {
  --ui-dropdown-font-color: var(--dropdown-text-color);

  position: relative;
  display: flex;
  flex-direction: column;

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 6px;
    color: var(--ui-dropdown-font-color);
    cursor: pointer;
  }

  &__content {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    max-height: 2000px;
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    overflow: hidden;
    transition: max-height 0.7s;
    z-index: 5;

    &--collapsed {
      transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
      max-height: 0;
      padding: 0;

      // @supports (-webkit-touch-callout: none) {
      //   height: 0px;
      // }
    }
  }

  &__input {
    @include inp-reset();
    position: absolute;
    width: 0;
    height: 0;
    z-index: -1;
  }

  &--size-sm {
    background: none;

    .ui-dropdown__title {
      padding: 0;
    }
  }
}
</style>
