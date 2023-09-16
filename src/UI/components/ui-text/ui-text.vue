<template>
  <component
    :is="tag"
    v-ui-color:text="color"
    v-ui-typo="{ type, size }"
    :class="classes"
  >
    <ui-tooltip
      v-if="ellipsis && useTooltip"
      :text="text"
      trigger="hover"
    >
      <span class="ui-text__content">{{ text }}</span>
    </ui-tooltip>
    <template v-else>
      <span class="ui-text__content">{{ text }}</span>
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { TextColor } from '@/entities/enums';

export interface UiTextPropsImpl {
  /** тип текста */
  type?: 'paragraph' | 'action';
  /** тэг текста */
  tag?: 'p' | 'span' | 'label';
  /** цвет текста */
  color?: TextColor;
  /** размер текста */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** контент */
  text: string;
  /** текст в одну строку */
  ellipsis?: boolean;
  /** отображать подсказку при ellipsis = true */
  useTooltip?: boolean;
  /** отступ сверху */
  offsetTop?: string | null;
  /** отступ слева */
  offsetLeft?: string | null;
  /** отступ справа */
  offsetRight?: string | null;
  /** отступ снизу */
  offsetBottom?: string | null;
}

const props = withDefaults(defineProps<UiTextPropsImpl>(), {
  tag: 'span',
  size: 'md',
  type: 'paragraph',
  offsetTop: null,
  offsetLeft: null,
  offsetRight: null,
  offsetBottom: null,
});

const classes = computed(() => {
  return [
    'ui-text',
    props.type === 'action' ? 'ui-action' : 'ui-paragraph',
    {
      'ui-text--ellipsis': props.ellipsis,
    },
  ];
});
</script>

<style>
.ui-text {
  position: relative;
  display: inline-block;
  max-width: 100%;
  vertical-align: middle;
}

.ui-text .ui-tooltip {
  max-width: 100%;
}

.ui-text--ellipsis .ui-text__content {
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
}
</style>
