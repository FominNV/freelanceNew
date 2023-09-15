<template lang="pug">
button(:class="classNames")
  template(v-if="text") {{ text }}
  slot
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IIUButtonProps {
  size?: 'sm' | 'md' | 'lg';
  text: string;
  round?: boolean;
  theme?: 'none' | 'primary' | 'secondary' | 'action';
  shadow?: boolean;
  p0?: boolean;
  fullWidth?: boolean;
  color?: 'light' | 'dark';
}

const props = withDefaults(defineProps<IIUButtonProps>(), {
  size: 'md',
  round: false,
  theme: 'none',
  shadow: false,
  p0: false,
  fullWidth: false,
});

const classNames = computed<ClassPropsType>(() => [
  'ui-button',
  `ui-button--theme-${props.theme}`,
  `ui-button--size-${props.size}`,
  { 'ui-button--round': props.round },
  { 'ui-button--shadow': props.shadow },
  { 'ui-button--padding-off': props.p0 },
  { 'ui-button--full-width': props.fullWidth },
  { 'ui-button--color-dark': props.color === 'dark' },
  { 'ui-button--color-light': props.color === 'light' },
]);
</script>

<style lang="scss">
.ui-button {
  // none theme

  // theme primary
  --ui-button-background-color-primary: var(--button-background-color-primary);
  --ui-button-font-color-primary: var(--button-font-color-primary);  
  
  // theme primary
  --ui-button-background-color-secondary: var(--button-background-color-secondary);
  --ui-button-font-color-secondary: var(--button-font-color-secondary);

  // theme primary  
  --ui-button-background-color-action: var(--button-background-color-action);
  --ui-button-font-color-action: var(--button-font-color-action);

  // size
  --ui-button-sm-font-size: 13px;
  --ui-button-md-font-size: 15px;
  --ui-button-lg-font-size: 17px;
  --ui-button-sm-border-radius: 4px;
  --ui-button-md-border-radius: 5px;
  --ui-button-lg-border-radius: 6px;

  @include btn-reset();
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s;
  
  &:active {
    transform: scale(.95);
  }
  
  &:hover {
    filter: brightness(130%);
  }

  &--shadow {
    box-shadow: 0 0 5px 0 rgba($color: gray, $alpha: 0.75);
  }

  &--size-sm {
    padding: 4px 6px;
    font-size: var(--ui-button-sm-font-size);
    border-radius: var(--ui-button-sm-border-radius);
  }

  &--size-md {
    padding: 8px 12px;
    font-size: var(--ui-button-md-font-size);
    border-radius: var(--ui-button-md-border-radius);
  }

  &--size-lg {
    padding: 12px 16px;
    font-size: var(--ui-button-lg-font-size);
    border-radius: var(--ui-button-lg-border-radius);
  }  

  &--theme-primary {
    background-color: var(--ui-button-background-color-primary) !important;
    color: var(--ui-button-font-color-primary);
  }
  
  &--theme-secondary {    
    background-color: var(--ui-button-background-color-secondary);
    color: var(--ui-button-font-color-secondary);    
  }

  &--theme-action {    
    background-color: var(--ui-button-background-color-action);
    color: var(--ui-button-font-color-action);
  }

  &--round {
    border-radius: 22px;
  }

  &--padding-off {
    padding: 0;
  }

  &--full-width {
    width: 100%;
  }

  &--color-dark {
    color: var(--ui-button-color-dark);
  }

  &--color-light {
    color: var(--ui-button-color-light);
  }
}
</style>
