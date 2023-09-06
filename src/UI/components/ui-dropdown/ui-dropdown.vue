<template lang="pug">
div(class="ui-dropdown")
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
}

defineProps<IUiDropdownProps>();

const input = ref<HTMLInputElement | null>(null);

const collapsed = ref<boolean>(true);
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
  --ui-dropdown-background-color: var(--dropdown-body-background-color);

  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--ui-dropdown-background-color);

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 6px;
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
    transition: all 0.7s;

    &--collapsed {
      transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
      max-height: 0;

      // @supports (-webkit-touch-callout: none) {
      //   height: 0px;
      // }
    }
  }

  &__input {
    position: absolute;
    width: 0;
    height: 0;
    z-index: -1;
  }
}
</style>
