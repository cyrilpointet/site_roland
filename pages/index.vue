<template>
  <div>
    <div>
      <h1>
        site_roland
      </h1>
      <h2>
        site vitrine + blog
      </h2>
      <span>
        <nuxt-link to="/">Accueil</nuxt-link>
      </span>
      <span>
        <nuxt-link to="/articles">blogPost</nuxt-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>
