<template lang="pug">
footer.footer-view
  ui-container
    div.footer-view__content
      div(
        v-for="(item, i) in cardItems"
        :key="item.title"
        class="footer-view__card-wrap"
      )
        ui-card(
          :title="$t(item.title)"
          titleBorder
        )
          footer-content(:index="i")
</template>

<script setup lang="ts">
import { FooterCardItems } from '@/entities/constants/footer-view';
import type { IItemDto } from '@/types';
import { ref } from 'vue';
import { FooterContent } from '@/content';

const cardItems = ref<IItemDto[]>(FooterCardItems);
</script>

<style lang="scss">
.footer-view {
  --ui-footer-heght: var(--footer-height);
  --ui-footer-background-color: var(--footer-background-color);
  --ui-footer-content-col-gap: 60px;
  --ui-footer-card-wrap-width: calc(33% - (var(--ui-footer-content-col-gap)/2));

  height: var(--ui-footer-heght);
  padding: 40px 0;
  background-color: var(--ui-footer-background-color);

  &__content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    column-gap: var(--ui-footer-content-col-gap);
  }

  &__card-wrap {
    width: var(--ui-footer-card-wrap-width);
    height: 100%;
  }
}
</style>
