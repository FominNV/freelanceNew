<template lang="pug">
main.main-view
  ui-container
    slot
</template>

<style lang="scss">
.main-view {
  --main-view-min-height: var(--main-min-height);

  min-height: var(--main-view-min-height);
}
</style>
