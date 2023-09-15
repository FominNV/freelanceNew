<template lang="pug">
page-view
  auth-form-view.auth-login-view(:title="$t('auth.login.title')")
    ui-input(
      v-model="email"
      :label="$t('auth.login.input.email')"
      :icon="mdiAccount"
      type="email")
      
    ui-input(
      v-model="password"      
      :label="$t('auth.login.input.password')"
      type="password")
    
    template(#action1)
      div.auth-login-view__action1
        ui-checkbox(
          v-model="remember"              
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
        fullWidth) {{ $t('auth.login.button.login') }}

    template(#action3)
      div.auth-login-view__action3
        p {{ $t('auth.login.text.account') }}
        ui-button(p0)
            ui-title(
              v-ui-typo="{type: 'paragraph', size: 'md'}"
              level="2"
              :text="$t('auth.login.button.register')")
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { mdiAccount } from '@mdi/js';

const email = ref<string>('');
const password = ref<string>('');
const remember = ref<boolean>(false);
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
