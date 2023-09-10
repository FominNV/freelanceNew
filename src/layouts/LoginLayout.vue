<template lang="pug">
div.login-layout
  ui-container
    div.login-layout__content
      slot
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.login-layout {
  --login-layout-background-color: var(--background-color-blue-light);

  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-color: var(--login-layout-background-color);

  &__content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
