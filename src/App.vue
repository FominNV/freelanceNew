<template lang="pug">
profile-index-view
</template>

<script setup lang="ts">
import ProfileIndexView from './modules/profile-module/views/ProfileIndexView.vue';
import { useI18n } from 'vue-i18n';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { t } = useI18n({ useScope: 'global' });

</script>
