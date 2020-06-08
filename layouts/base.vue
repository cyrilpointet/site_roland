<template>
  <div>
    <navbar />
    <div class="container mx-auto">
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
