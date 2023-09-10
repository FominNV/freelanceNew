<template lang="pug">
router-view
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { t } = useI18n({ useScope: 'global' });
</script>
