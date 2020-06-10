<template>
  <div class="headerContainerArticle">
    <span class="headerBackground"></span>
    <span class="headerMaskArticle"></span>
    <div class="headerTextArticle container mx-auto">
      <h1
        class="text-2xl md:text-4xl pl-4 md:pl-0 headerTextAnimated w-2/3 md:w-1/2 truncate"
      >
        {{ titleText }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['titleText']
}
</script>

<style lang="scss">
@import '~assets/css/animations';
@import '~assets/css/variables';

.header {
  &ContainerArticle {
    @apply w-full h-20 bg-white relative bg-white min-h-screen;
    min-height: 200px;
  }
  &Background {
    @apply absolute inset-0 bg-center bg-no-repeat bg-cover opacity-0 bg-lightgray;
    animation: fadeIn $transitionDuration ease-out forwards;
  }
  &MaskArticle {
    @apply absolute inset-0 bg-primary;
    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 80%);
    animation: slideInLeft $transitionDuration ease-out;
  }
  &TextArticle {
    @apply text-white relative flex;
    height: 100%;
    padding-top: 3rem;
    &Animated {
      opacity: 0;
      transform: scale3d(0, 0, 0);
      transform-origin: center center;
      animation: zoomIn $transitionDuration ease-out forwards;
      animation-delay: $transitionPageDuration;
    }
  }
  &Arrow {
    @apply text-2xl absolute mb-10 rounded-full text-white p-4 opacity-0;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn $transitionDuration ease-out forwards;
    animation-delay: $transitionPageDuration;
  }
}

@screen md {
  .headerContainerArticle {
    @apply min-h-0;
  }
  .headerTextArticle {
    @apply pt-3;
  }
  .headerMaskArticle {
    clip-path: polygon(0 0, 75% 0, 50% 100%, 0 100%);
  }
}
</style>
