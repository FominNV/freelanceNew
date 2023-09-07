<template lang="pug">
div(:class="cardClassname")
  h4(
    v-if="title"
    :class="cardTitleClassname") {{ title }}
  .ui-card__content 
    slot
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ClassPropsType } from '@/types';

interface IUiCardProps {
  title?: string;
  titleBorder: boolean;
  bordered: boolean;
}

const props = withDefaults(defineProps<IUiCardProps>(), {
  titleBorder: false,
  bordered: false,
});

const cardTitleClassname = computed<ClassPropsType>(() => [
  'ui-card__title',
  { 'ui-card__title--bordered': props.titleBorder },
]);

const cardClassname = computed<ClassPropsType>(() => [
  'ui-card',
  { 'ui-card--bordered': props.bordered },
]);
</script>

<style lang="scss">
.ui-card {
  --ui-card-title-border-color: var(--card-title-border-color);

  display: flex;
  flex-direction: column;
  row-gap: 20px;

  &__title {
    padding: 8px 0;
    border-bottom: 3px solid transparent;

    &--bordered {
      border-color: var(--ui-card-title-border-color);
    }
  }

  &__content {
    padding: 8px 0;
  }

}
</style>
