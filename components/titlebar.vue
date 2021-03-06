<template>
  <header>
    <div class="headerContainer mb-10 md:mb-0">
      <span class="headerBackground" :style="bgUrl"></span>
      <span class="headerMask"></span>
      <div class="headerText container mx-auto flex flex-col">
        <h1
          class="titleFont text-4xl md:text-6xl pl-4 md:pl-0 headerTextAnimated"
        >
          {{ titleText }}
        </h1>
        <h2
          v-if="subtitleText"
          class="titleFont text-xl md:hidden pl-4 headerTextAnimated"
        >
          {{ subtitleText }}
        </h2>
      </div>
      <a href="#mainContent">
        <i class="icon-down-open headerArrow"></i>
      </a>
    </div>
    <div class="titleFont headerSubtitle">
      <h2 v-if="subtitleText">
        {{ subtitleText }}
      </h2>
    </div>
  </header>
</template>

<script>
export default {
  props: ['titleText', 'subtitleText', 'backgroundImg'],
  computed: {
    bgUrl() {
      return {
        backgroundImage: `url('${this.backgroundImg}')`
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/animations';
@import '~assets/css/variables';

.header {
  &Container {
    @apply w-full h-20 bg-white relative bg-white min-h-screen;
    height: 300px;
  }
  &Background {
    @apply absolute inset-0 bg-center bg-no-repeat bg-cover;
    animation: fadeIn $transitionDurationLong ease-out forwards;
  }
  &Mask {
    @apply absolute inset-0 bg-primary;
    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 80%);
    animation: slideInLeft $transitionDurationLong ease-out;
  }
  &Text {
    @apply text-white relative;
    height: 100%;
    padding-top: 25%;
    &Animated {
      opacity: 0;
      transform: scale3d(0, 0, 0);
      transform-origin: left center;
      animation: zoomIn $transitionDurationLong ease-out forwards;
      animation-delay: $transitionDurationShort;
    }
  }
  &Subtitle {
    @apply text-3xl my-5 text-center hidden pl-4;
    opacity: 0;
    animation: fadeInDown $transitionDurationLong ease-out forwards;
    animation-delay: $transitionDurationShort;
  }
  &Arrow {
    @apply text-xl absolute mb-10 rounded-full text-white p-4 opacity-0;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn $transitionDurationLong ease-out forwards;
    animation-delay: $transitionDurationShort;
  }
}

@screen md {
  .headerContainer {
    @apply min-h-0;
  }
  .headerText {
    @apply pt-10;
  }
  .headerMask {
    clip-path: polygon(0 0, 75% 0, 50% 100%, 0 100%);
  }
  .headerSubtitle {
    @apply block;
  }
  .headerArrow {
    display: none !important;
  }
}

@screen lg {
  .headerMask {
    clip-path: polygon(0 0, 50% 0, 25% 100%, 0 100%);
  }
}
</style>
