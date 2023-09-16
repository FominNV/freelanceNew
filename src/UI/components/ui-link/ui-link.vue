<template>
  <a
    v-if="!routerLink && typeof to === 'string'"
    :href="to ? to : undefined"
    :class="classList"
    :target="`_${target}`"
    @click="emit('click', $event)"
  >
    <!-- @slot слот для размещения текста ссылки -->
    <slot>
      <ui-text
        type="action"
        :size="size"
        :text="text"
      />
    </slot>
  </a>
  <router-link
    v-else
    :to="to"
    :class="classList"
    @click="emit('click', $event)"
  >
    <!-- @slot слот для размещения текста ссылки -->
    <slot>
      <ui-text
        type="action"
        :size="size"
        :text="text"
      />
    </slot>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, RouteLocation } from 'vue-router';
import type { ClassPropsType } from '@/types';

export interface UiLinkPropsImpl {
  /** Маршрут ссылки */
  to?: string | RouteLocation;
  /** Текст ссылки */
  text?: string;
  /** Отключение ссылки */
  disabled?: boolean;
  /**
   * Определяет, где показать содержимое по ссылке
   * @param blank загружает документ в новой вкладке
   * @param self загружает документ в текущем фрейме
   * @param parent загружает документ в родительском фрейме
   * @param top В HTML5 загружает в окне высшего уровня. Если родителя нет, опция ведёт себя как self
   */
  target?: 'self' | 'blank' | 'parent' | 'top';
  /** Тема ссылки */
  theme?: 'default' | 'primary';
  /** Размер текста ссылки */
  size?: 'sm' | 'md' | 'lg';
  /** флаг переключения на router-link */
  routerLink?: boolean
  /** Показать нижнее подчеркивание */
  underline?: boolean;
}

const props = withDefaults(defineProps<UiLinkPropsImpl>(), {
  theme: 'primary',
  to: '',
  text: '',
  disabled: false,
  underline: false,
  routerLink: false,
  target: 'self',
  size: 'sm',
});

const emit = defineEmits<{
  /** Событие клика по ссылке */
  (e: 'click', value: MouseEvent): void;
}>();

const classList = computed<ClassPropsType>(() => [
  'ui-link',
  `ui-link--${props.theme}`,
  {
    'ui-link--underline': props.underline,
    'ui-link--disabled': props.disabled,
  },
]);
</script>

<style lang="scss">
.ui-link {
  --ui-link-text-color: var(--color-black);

  color: var(--ui-link-text-color);
  text-decoration: none;
  transition: color ease .2s;
  cursor: pointer;

  &:visited {
    color: var(--ui-link-text-color);
  }
}
</style>
