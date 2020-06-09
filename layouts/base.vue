<template>
  <div class="screenView">
    <navbar />
    <nuxt />
    <footerbar />
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import footerbar from '../components/footerbar.vue'

export default {
  components: {
    navbar,
    footerbar
  }
}
</script>

<style lang="scss">
@import '~assets/css/variables';
@import '~assets/css/animations.scss';

.screenView {
  @apply min-h-screen relative;
  padding-bottom: 40px;
  max-width: 100vw;
  overflow-x: hidden;
}

/*.page-enter-active {
  animation: fadeIn $transitionPageDuration;
}*/
.page-leave-active {
  animation: noAnim $transitionPageDuration linear;
  & .titleMask,
  .titleMaskArticle,
  .hpBackgroundUpper,
  .hpAnimatedText {
    animation: fadeOutLeft $transitionPageDuration linear;
  }
  & .titleTextAnimated {
    animation: zoomOut $transitionPageDuration linear;
  }
  & .hpBackgroundUnder,
  .titleBackground,
  .animatedContent,
  .titleArrow,
  .hpAnimatedFadeIn {
    animation: fadeOut $transitionPageDuration linear;
  }
}
.btn-base {
  @apply text-secondary border border-secondary py-2 px-4 uppercase cursor-pointer rounded-full;
  transition: background-color 0.2s linear;
  &:hover {
    @apply bg-secondary-dark;
  }
}
</style>
