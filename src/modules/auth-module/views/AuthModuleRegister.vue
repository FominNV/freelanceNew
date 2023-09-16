<template lang="pug">
page-view
  auth-form-view.auth-register-view(:title="$t('auth.register.title')")
    ui-input(
      v-model="user"
      :label="$t('auth.register.input.user')"
      :icon="mdiAccount"
      type="text")

    ui-input(
      v-model="email"
      :label="$t('auth.register.input.email')"
      :icon="mdiEmail"
      type="email")

    ui-input(
      v-model="password1"
      :label="$t('auth.register.input.password1')"
      type="password")

    ui-input(
      v-model="password2"
      :label="$t('auth.register.input.password2')"
      type="password")

    template(#action1)
        ui-checkbox(
          v-model="agree"
          :title="$t('auth.register.checkbox.agree')"
          )

    template(#action2)
      ui-button(
        v-ui-color:text="'white'"
        theme="primary"
        fullWidth) {{ $t('auth.register.button.register') }}

    template(#action3)
      div.auth-register-view__action3
        p {{ $t('auth.register.text.account') }}
        ui-link(
          :to="PathNames.Login"
          routerLink)
          ui-title(
            v-ui-typo="{type: 'paragraph', size: 'md'}"
            level="2"
            :text="$t('auth.register.button.login')")
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { mdiAccount, mdiEmail } from '@mdi/js';
import { PathNames } from '@/entities/enums';

const user = ref<string>('');
const email = ref<string>('');
const password1 = ref<string>('');
const password2 = ref<string>('');
const agree = ref<boolean>(false);
</script>

<style lang="scss">
.auth-register-view {
  &__action3 {
    display: flex;
    justify-content: center;
    column-gap: 12px;
    align-items: center;
  }
}
</style>
