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

.animatedContent {
  @apply mb-5 px-2;
  opacity: 0;
  animation: fadeIn $transitionDuration forwards;
}
@screen md {
  .animatedContent {
    @apply mb-5 px-0;
  }
}

.page-leave-active {
  animation: noAnim $transitionPageDuration linear;
  & .headerMask,
  .headerMaskArticle,
  .hpBackgroundUpper,
  .hpAnimatedText {
    animation: fadeOutLeft $transitionPageDuration linear;
  }
  & .headerTextAnimated {
    animation: zoomOut $transitionPageDuration linear;
  }
  & .hpBackgroundUnder,
  .headerBackground,
  .animatedContent,
  .headerArrow,
  .hpAnimatedFadeIn {
    animation: fadeOut $transitionPageDuration linear;
  }
  & .headerSubtitle {
    animation: fadeOutUp $transitionPageDuration linear;
  }
}
.btn-base {
  @apply text-secondary border border-secondary py-2 px-4 uppercase cursor-pointer rounded-full block;
  transition: background-color 0.2s linear;
  &:hover {
    @apply bg-secondary-dark;
  }
  &:focus {
    outline: none !important;
  }
}
.btn-dark {
  @apply text-secondary border border-secondary py-2 px-4 uppercase cursor-pointer rounded-full bg-secondary-dark block;
  transition: background-color 0.2s linear;
  &:hover {
    @apply bg-primary;
  }
  &:focus {
    outline: none !important;
  }
}
</style>
