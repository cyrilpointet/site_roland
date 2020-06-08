<template>
  <div>
    <navbar />

    <nuxt />
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'

export default {
  components: {
    navbar
  }
}
</script>

<style lang="scss">
@import '~assets/css/variables';
@import '~assets/css/animations.scss';

.page-enter-active {
  animation: fadeIn $transitionPageDuration;
}
.page-leave-active {
  animation: fadeOut $transitionPageDuration;
}
</style>
