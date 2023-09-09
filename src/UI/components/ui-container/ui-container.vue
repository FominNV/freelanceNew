<template lang="pug">
div.ui-container
  slot
</template>

<style>
.ui-container {
  --ui-container-max-width: var(--container-max-width);
  --ui-container-padding-right: var(--container-padding-right);
  --ui-container-padding-left: var(--container-padding-left);

  /* min-height: 100%; */
  height: 100%;
  max-width: var(--ui-container-max-width);
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--ui-container-padding-right);
  padding-left: var(--ui-container-padding-left);
}
</style>
