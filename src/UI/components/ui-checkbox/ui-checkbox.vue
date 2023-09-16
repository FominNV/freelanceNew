<template lang="pug">
label(
  class="ui-checkbox"
  aria-label="checkbox"
)
  input(
    v-model="model"
    class="ui-checkbox__input"
    type="checkbox"
  )
  div(:class="['ui-checkbox__box', {'ui-checkbox__box--checked': model}]")
    svg-icon(
      class="ui-checkbox__icon"
      type="mdi"
      :path="mdiCheckBold"
      size="20"
    )
  p(
    v-ui-color="titleColor"
    class="ui-checkbox__title") {{ title }}
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { mdiCheckBold } from '@mdi/js';
import { TextColor } from '@/entities/enums';

interface IUiCheckboxProps {
  modelValue: boolean;
  title: string;
  titleColor?: TextColor;
}

const props = withDefaults(defineProps<IUiCheckboxProps>(), {
  modelValue: false,
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void;
}>();

const model = computed<boolean>({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});
</script>

<style lang="scss">
.ui-checkbox {
  --ui-checkbox-size-sm: 16px;
  --ui-checkbox-background-color: var(--color-white);
  --ui-checkbox-border-color: var(--color-black-3);

  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 6px;
  cursor: pointer;
  padding: 4px 0;
  user-select: none;

  &__input {
    position: absolute;
    z-index: -1;
  }

  &__box {
    width: var(--ui-checkbox-size-sm);
    height: var(--ui-checkbox-size-sm);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--ui-checkbox-background-color);
    border: 2px solid var(--ui-checkbox-border-color);

    &--checked {
      .ui-checkbox__icon {
        opacity: 1;
      }
    }
  }

  &__icon {
    opacity: 0;
    transition: all 0.25s;

    path {
      color: var(--ui-checkbox-icon-color);
    }
  }
}
</style>
