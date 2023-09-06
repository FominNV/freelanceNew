<template lang="pug">
button(:class="classNames")
  slot
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IIUButtonProps {
  size?: 'sm' | 'md' | 'lg';
  round?: boolean;
  theme?: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<IIUButtonProps>(), {
  size: 'md',
  round: false,
  theme: 'primary',
});

const classNames = computed<ClassPropsType>(() => [
  'ui-button',
  `ui-button--theme-${props.theme}`,
  `ui-button--size-${props.size}`,
]);
</script>

<style lang="scss">
.ui-button {
  // theme primary
  --ui-button-background-color-primary: var(--button-background-color-primary);
  --ui-button-font-color-primary: var(--button-font-color-primary);
  --ui-button-background-color-secondary: var(--button-background-color-secondary);
  --ui-button-font-color-secondary: var(--button-font-color-secondary);

  // size
  --ui-button-sm-font-size: 13px;
  --ui-button-md-font-size: 15px;
  --ui-button-lg-font-size: 17px;
  --ui-button-sm-border-radius: 4px;
  --ui-button-md-border-radius: 5px;
  --ui-button-lg-border-radius: 6px;

  @include btn-reset();
  transition: all 0.25s;

  &:active {
    transform: scale(.95)
  }

  &:hover {
    filter: brightness(130%);
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
}
</style>
