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
  /* head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Lorem ipsum et...'
        }
      ],
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  } */
}
</script>

<style lang="scss">
@import '~assets/css/variables';
@import '~assets/css/animations.scss';
@import '~assets/css/buttons.scss';
@import '~assets/css/fontello.scss';

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
  animation: fadeIn $transitionDurationLong forwards;
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
    animation: fadeOutLeft $transitionDurationShort linear forwards;
  }
  & .headerTextAnimated {
    animation: zoomOut $transitionDurationShort linear forwards;
  }
  & .hpBackgroundUnder,
  .headerBackground,
  .animatedContent,
  .headerArrow,
  .hpAnimatedFadeIn {
    animation: fadeOut $transitionDurationShort linear forwards;
  }
  & .headerSubtitle {
    animation: fadeOutUp $transitionDurationShort linear forwards;
  }
}
</style>
