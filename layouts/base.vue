<template>
  <div>
    <navbar />
    <div>
      <nuxt />
    </div>
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
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
