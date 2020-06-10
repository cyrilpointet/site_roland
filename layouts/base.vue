<template>
  <div class="screenView">
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'

export default {
  components: {
    navbar
  },
  created() {
    if (process.client) {
      const vh = window.innerHeight * 0.01; // eslint-disable-line
      document.documentElement.style.setProperty('--vh', `${vh}px`); // eslint-disable-line
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/variables';
@import '~assets/css/animations.scss';

.screenView {
  @apply relative;
  padding-bottom: 40px;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  min-height: calc(var(--vh, 1vh) * 100);
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
  animation: noAnim 0.3s linear;
  & .headerMask,
  .headerMaskArticle,
  .hpBackgroundUpper,
  .hpAnimatedText {
    animation: fadeOutLeft $transitionPageDuration linear forwards;
  }
  & .headerTextAnimated {
    animation: zoomOut $transitionPageDuration linear forwards;
  }
  & .hpBackgroundUnder,
  .headerBackground,
  .animatedContent,
  .headerArrow,
  .hpAnimatedFadeIn {
    animation: fadeOut $transitionPageDuration linear forwards;
  }
  & .headerSubtitle {
    animation: fadeOutUp $transitionPageDuration linear forwards;
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
  &-small {
    @apply py-1 px-2 text-sm;
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
