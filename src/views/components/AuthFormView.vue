<template lang="pug">
div.auth-view
  div.auth-view__content
    div.auth-view__panel
      ui-link(
        to="/"
        size="md"
        routerLink
        :text="$t('auth.link.main')")
      language-switcher-view(size="xs")

    ui-title(
      v-if="title"
      v-ui-typo="{type: 'title', size: 'sm'}"
      level="1"
      :text="title"
    )

    div.auth-view__body
      form(
        class="auth-view__form"
        @submit.prevent
      )
        slot
      div(
        v-if="$slots.action1"
        class="auth-view__action1"
      )
        slot(name="action1")
      div(
        v-if="$slots.action2"
        class="auth-view__action2"
      )
        slot(name="action2")
      div(
        v-if="$slots.action3"
        class="auth-view__action3"
      )
        slot(name="action3")
</template>

<script setup lang="ts">
interface IAuthFormViewProps {
  title?: string;
}

defineProps<IAuthFormViewProps>();
</script>

<style lang="scss">
.auth-view {
  --auth-form-view-background-color: var(--background-color-white);
  --auth-form-view-border-color: var(--color-white);
  --auth-form-view-border-radius: 12px;

  width: 100%;
  max-width: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 32px;
  background-color: rgba($color: white, $alpha: 0.15);
  border: 1px solid var(--auth-form-view-border-color);
  border-radius: var(--auth-form-view-border-radius);
  backdrop-filter: blur(80%);

  &__panel {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: -30px;
    left: 0;
  }

  &__content {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
  }

  &__body {
    width: 100%;
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }

  &__action1,
  &__action2 {
    width: 100%;
    padding: 16px 0;
  }

  &__action3 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
  }
}
</style>
