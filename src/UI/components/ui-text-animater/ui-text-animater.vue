<template lang="pug">
p.ui-text-animater {{ text }}  
  slot
</template>

<script setup lang="ts">
interface IUiTextAnimaterProps {
  text?: string;
  size?: number;
}

defineProps<IUiTextAnimaterProps>();
</script>

<style>
.ui-text-animater {
  --ui-text-animater-font-famaly: var(--abril-font-family);
  --ui-text-animater-font-color: var(--font-color-pale-blue);
  --ui-text-animater-border-color: var(--font-color-pale-blue);
  --ui-text-animater-bacground-color: var(--font-color-pale-blue);

  position: relative;
  width: 120px;
  font-size: 40px;
  font-weight: 700;
  color: transparent;
  background-image: linear-gradient(var(--ui-text-animater-bacground-color), var(--ui-text-animater-bacground-color));
  background-repeat: no-repeat;
  background-position: -120px 0;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: .7px var(--ui-text-animater-font-color);
  animation: homeBgText 3s linear infinite;
  animation-delay: 2s;
}

.ui-text-animater::before {
  content: '';
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-right: 2px solid var(--ui-text-animater-border-color);
  background-position: 0 0;
  animation: homeCursoreText 3s linear infinite;
  animation-delay: 2s;
}
</style>
