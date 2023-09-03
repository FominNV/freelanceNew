<template lang="pug">
label(
  class="ui-switch"
  aria-label="switch")
  input(
    v-model="checked"
    class="ui-switch__input"
    type="checkbox"
    @change="changeValue")
  div(:class="['ui-switch__toggle', {'ui-switch__toggle--checked': checked}]")
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface IUiSwitchProps {
  value?: string;
  trueValue?: string;
  falseValue?: string;
}

const props = defineProps<IUiSwitchProps>();
const emit = defineEmits<{(e: 'change', value: string | boolean): void}>();

const checked = ref<boolean>(Boolean(props.value && props.value === props.trueValue));

function changeValue() {
  emit('change', sendValue(checked.value));
}

function sendValue(value: boolean): boolean | string {
  switch (value) {
  case (true): {
    return props.trueValue ? props.trueValue : true;
  }
  case (false): {
    return props.falseValue ? props.falseValue : false;
  }
  }
}
</script>

<style lang="scss">
.ui-switch {
  --ui-switch-height: 20px;
  --ui-switch-width: calc(var(--ui-switch-height) + var(--ui-switch-height));
  --ui-switch-background-color: var(--switch-background-color);

  --ui-switch-toggle-width: calc(var(--ui-switch-height) - 4px);
  --ui-switch-toggle-height: var(--ui-switch-toggle-width);
  --ui-switch-toggle-background-color: var(--switch-toggle-background-color);

  width: var(--ui-switch-width);
  height: var(--ui-switch-height);
  padding: 2px;
  background-color: var(--ui-switch-background-color);
  border-radius: calc(var(--ui-switch-toggle-width) / 2);
  cursor: pointer;
  caret-color: transparent;

  &__input {
    display: none;
  }

  &__toggle {
    width: var(--ui-switch-toggle-width);
    height: var(--ui-switch-toggle-height);
    margin-left: 0;
    background-color: var(--ui-switch-toggle-background-color);
    border-radius: 50%;
    transition: all 0.3s;

    &--checked {
      margin-left: calc(var(--ui-switch-toggle-width) + 4px) ;
    }
  }
}

</style>
