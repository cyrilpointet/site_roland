<template>
  <footer v-if="routePath !== '/'" class="footerBar animatedContent">
    <div class="container mx-auto">
      <p>© 2020 Cyril Pointet</p>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['routePath']
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables';
@import '~assets/css/animations.scss';

.footerBar {
  @apply absolute right-0 left-0 bottom-0 bg-primary p-2 text-white;
  margin-bottom: 0 !important;
  animation: fadeIn $transitionPageDuration linear forwards;
  animation-delay: 0.5s;
}
</style>
