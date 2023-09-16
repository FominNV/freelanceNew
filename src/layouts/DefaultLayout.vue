<template lang="pug">
div.default-layout
  header-view
  main-view
    slot
  footer-view
</template>

<style lang="scss">
.default-layout {
  --default-layout-gradient-background-color-primary: var(--body-background-color-primary);
  --default-layout-gradient-background-color-secondary: var(--body-background-color-secondary);

  transition-property: background-color;
  transition-duration: 0.5s;
  width: 100%;
  min-height: 100vh;
  // background: linear-gradient(var(--default-layout-gradient-background-color-primary) 50%, var(--default-layout-gradient-background-color-secondary));
  background: var(--default-layout-gradient-background-color-primary);
}
</style>
