<template>
  <div>
    <div>
      <h1>
        site_roland
      </h1>
      <h2>
        site vitrine + blog
      </h2>
    </div>
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
