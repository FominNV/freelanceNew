<template>
  <component
    :is="tagName"
    :class="styles"
  >
    <!-- @slot слот для размещения контента перед заголовком -->
    <slot name="prepend" />
    {{ text }}
    <!-- @slot слот для размещения контента после заголовка -->
    <slot name="append" />
  </component>
</template>

<script setup lang="ts">
import { ClassPropsType } from '@/types';
import { computed } from 'vue';

export interface UiTitlePropsImpl {
  /** уровень заголовка */
  level?: 1 | 2 | 3;
  /** текст заголовка */
  text?: string;
}

const props = withDefaults(defineProps<UiTitlePropsImpl>(), {
  level: 2,
});
const tagName = computed(() => `h${props.level}`);
const styles = computed<ClassPropsType>(() => [
  'ui-title',
]);

</script>

<style lang="scss">
.ui-title {  
  --title-gap: var(--spacing-1-5);
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--title-gap);
}
</style>
