<template>
  <div>
    <h1 class="p-10 text-6xl">pouet pouet</h1>
  </div>
</template>

<script>
export default {
  layout: 'base',
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>
