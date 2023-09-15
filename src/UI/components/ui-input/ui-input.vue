<template lang="pug">
div.ui-input
  input(
    v-model="model"
    :class="inputClassName"
    :type="inputType"
  )  
  label(
    v-if="label"
    :class="labelClassName"
  ) {{ label }}

  //- @slot иконка
  div(
    v-if="icon && type !== 'password'"
    class="ui-input__icon-wrap"
  )
    svg-icon(
        type="mdi"
        :path="icon"
        size="20")

  //- type password
  div(
    v-if="type === 'password'"
    class="ui-input__icon-wrap"
  )
    button(
      class="ui-input__icon-button"
      @click="toggleShowInputText"
    )
      svg-icon(
        class="ui-input__icon"
        type="mdi"
        :path="showInputText ? mdiLockOpenVariant : mdiLock"
        size="20"
      )
</template>

<script setup lang="ts">
import type { ClassPropsType } from '@/types';
import { computed, ref } from 'vue';
import { mdiLock , mdiLockOpenVariant  } from '@mdi/js';

interface IUiInputProps {
  label?: string;
  modelValue: any;
  type: string;
  icon?: string;
}

const props = withDefaults(defineProps<IUiInputProps>(), {
  modelValue: '',
  type: 'text',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
}>();

const model = computed<string>({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});

const inputClassName = computed<ClassPropsType>(() => [
  'ui-input__input',
  { 'ui-input__input--icon': props.icon || props.type === 'password' },
]);

const labelClassName = computed<ClassPropsType>(() => [
  'ui-input__label',
  { 'ui-input__label--lifted': !!model.value?.trim() },
]);

const toggleInputType = ref<string | null>(null);
const showInputText = ref<boolean>(false);
const inputType = computed<string>(() => toggleInputType.value || props.type);

function toggleShowInputText() {
  showInputText.value = !showInputText.value;
  toggleInputType.value = showInputText.value ? 'text' : null;
}
</script>

<style lang="scss">
.ui-input {
  --ui-input-text-color: var(--font-color-pale-blue-dark);
  --ui-input-border-color: var(--background-color-pale-blue-dark);

  --ui-input-label-text-color: var(--font-color-white-low-blue);
  --ui-input-label-font-size: 14px;
  --ui-input-label-padding-top: 8px;
  --ui-input-label-padding-bottom: 8px;
  --ui-input-label-top: calc(var(--ui-input-label-font-size) + var(--ui-input-label-padding-top) + var(--ui-input-label-padding-bottom));
  
  --ui-input-input-text-color: var(--font-color-pale-blue-dark);
  --ui-input-input-font-size: 16px;
  --ui-input-input-padding-top: 8px;
  --ui-input-input-padding-left: 6px;
  --ui-input-input-padding-bottom: 8px;

  --ui-input-icon-wrap-height: calc(var(--ui-input-input-font-size) + var(--ui-input-input-padding-top) + var(--ui-input-input-padding-bottom));
  --ui-input-icon-wrap-width: 32px;
  
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;

  &__label {
    position: relative;
    // color: var(--ui-input-label-text-color);
    font-size: var(--ui-input-label-font-size);
    padding-top: var(--ui-input-label-padding-top);
    padding-bottom: var(--ui-input-label-padding-bottom);
    top: var(--ui-input-label-top);
    transition: top 0.25s;

    &--lifted {
      top: 0;
    }
  }

  &__input {
    @include inp-reset();
    width: 100%;
    border-bottom: 2px solid var(--ui-input-border-color);
    font-size: var(--ui-input-input-font-size);
    padding-top: var(--ui-input-input-padding-top);
    padding-left: var(--ui-input-input-padding-left);
    padding-bottom: var(--ui-input-input-padding-bottom);
    z-index: 2;

    &:focus + .ui-input__label {
      top: 0;
    }

    &[type=password]::-ms-reveal,
    &[type=password]::-ms-clear {
        display: none;
    }

    &--icon {
      padding-right: var(--ui-input-icon-wrap-width);
    }
  }

  &__icon-wrap {
    width: var(--ui-input-icon-wrap-width);
    height: var(--ui-input-icon-wrap-height);
    position: absolute;
    right: 0;
    bottom: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__icon-button {
    @include btn-reset();
    cursor: pointer;
    z-index: 3;
  }
}

</style>
