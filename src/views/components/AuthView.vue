<template lang="pug">
div.auth-view
  div.auth-view__content
    ui-title(
      level="2"
      text="Login"
      align="center"
    )
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.auth-view {
  --auth-view-border-color: var(--border-color-white);
  --auth-view-border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 32px;
  border: 1px solid var(--auth-view-border-color);
  border-radius: var(--auth-view-border-radius);

  &__content {
    width: 300px;
  }
}
</style>
