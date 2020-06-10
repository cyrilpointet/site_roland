<template>
  <footer class="footerBar animatedContent">
    <div class="container mx-auto">
      <p>© 2020 Cyril Pointet</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '~assets/css/variables';
@import '~assets/css/animations.scss';

.footerBar {
  @apply absolute right-0 left-0 bottom-0 bg-primary p-2 text-white;
  animation: fadeIn $transitionPageDuration linear;
  animation-delay: 0.5s;
}
</style>
