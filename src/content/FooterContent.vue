<template lang="pug">
template(v-if="index !== undefined")
  template(v-if="index === 0")
    div.footer-content__text {{ $t('footer.cards.content.advertisment') }}

  template(v-if="index === 1")
    div.footer-content__links
      ui-link.footer-content__link(
        v-for="(item, i) in links"
        :key="i"
      )
        svg-icon(          
          type="mdi"
          :path="item"
          size="48"
        )

  template(v-if="index === 2")
    div.footer-content__text {{ $t('footer.cards.content.address') }}
    
</template>

<script setup lang="ts">
import type { IContentProps } from '@/types';
import { mdiYoutube, mdiGooglePlus, mdiTwitter, mdiTwitch } from '@mdi/js';
import { ref } from 'vue';

defineProps<IContentProps>();

const links = ref<string[]>([mdiYoutube, mdiGooglePlus, mdiTwitter, mdiTwitch ]);
</script>

<style lang="scss">
.footer-content__text {
  --footer-content-color: var(--font-color-gray);
  
  line-height: 1.2rem;
  color: var(--footer-content-color);
}

.footer-content__links {
  --footer-content-link-color: var(--font-color-gray);
  --footer-content-link-hover-color: var(--footer-text-hover-color);

  display: flex;
  align-items: center;
  column-gap: 16px;
}

.footer-content__link {
  path {
    color: var(--footer-content-link-color);
    transition: all 0.25s;
  }
  &:hover {
    path {
      color: var(--footer-content-link-hover-color);
    }
  }
}
</style>
