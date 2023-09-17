<template lang="pug">
page-view
  auth-form-view.auth-login-view(:title="$t('auth.login.title')")
    ui-input(
      v-model="model.email"
      :label="$t('auth.login.input.email')"
      :icon="mdiEmail"
      :error="emailError"
      type="email")

    ui-input(
      v-model="model.password"
      :label="$t('auth.login.input.password')"
      :error="passwordError"
      type="password")

    template(#action1)
      div.auth-login-view__action1
        ui-checkbox(
          v-model="model.remember"
          :title="$t('auth.login.checkbox.remember')"
          titleColor="black"
          )
        ui-button(
          :text="`${$t('auth.login.button.forgot')}?`"
          p0)

    template(#action2)
      ui-button(
        v-ui-color:text="'white'"
        theme="primary"
        fullWidth
        @click="login") {{ $t('auth.login.button.login') }}

    template(#action3)
      div.auth-login-view__action3
        p {{ $t('auth.login.text.account') }}
        ui-link(
          :to="PathNames.Register"
          routerLink)
          ui-title(
            v-ui-typo="{type: 'paragraph', size: 'md'}"
            level="2"
            :text="$t('auth.login.button.register')")
</template>

<script setup lang="ts">
import { mdiEmail } from '@mdi/js';
import { PathNames } from '@/entities/enums';
import { reactive } from 'vue';
import { required, email } from '@/utils';
import { useVuelidate } from '@vuelidate/core';
import type { IUserLogin } from '@/types';
import { computed } from 'vue';

const rules = {
  email: { required, email },
  password: { required },
};

const model = reactive<IUserLogin>({
  email: '',
  password: '',
  remember: false,
});

const v$ = useVuelidate(rules, model);
const emailError = computed(() => v$.value.email.$errors[0]?.$message);
const passwordError = computed(() => v$.value.password.$errors[0]?.$message);

function login() {
  v$.value.$touch();
}
</script>

<style lang="scss">
.auth-login-view {
  &__action1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__action3 {
    display: flex;
    justify-content: center;
    column-gap: 12px;
    align-items: center;
  }
}
</style>
