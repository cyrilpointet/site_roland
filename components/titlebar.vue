<template>
  <div class="titleContainer mb-10">
    <span class="titleBackground" :style="bgUrl"></span>
    <span class="titleMask"></span>
    <div class="titleText container mx-auto">
      <h1 class="text-4xl md:text-6xl pl-4 md:pl-0 titleTextAnimated">
        {{ titleText }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['titleText', 'backgroundImg'],
  computed: {
    bgUrl() {
      return {
        backgroundImage: `url('images/${this.backgroundImg}')`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/animations';
@import '~assets/css/variables';

.title {
  &Container {
    @apply w-full h-20 bg-white relative bg-white min-h-screen;
    height: 300px;
  }
  &Background {
    @apply absolute inset-0 bg-center bg-no-repeat bg-cover opacity-0;
    animation: fadeIn $transitionDuration ease-out forwards;
  }
  &Mask {
    @apply absolute inset-0 bg-primary;
    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 80%);
    animation: slideInLeft $transitionDuration ease-out;
  }
  &Text {
    @apply text-white relative flex;
    height: 100%;
    padding-top: 25%;
    &Animated {
      opacity: 0;
      transform: scale3d(0, 0, 0);
      transform-origin: center center;
      animation: zoomIn $transitionDuration ease-out forwards;
      animation-delay: $transitionPageDuration;
    }
  }
}

@screen md {
  .titleContainer {
    @apply min-h-0;
  }
  .titleText {
    @apply pt-10;
  }
  .titleMask {
    clip-path: polygon(0 0, 75% 0, 50% 100%, 0 100%);
  }
}

@screen lg {
  .titleMask {
    clip-path: polygon(0 0, 50% 0, 25% 100%, 0 100%);
  }
}
</style>
