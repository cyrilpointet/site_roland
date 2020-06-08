<template>
  <div class="bg-primary text-white p-4">
    <div class="container mx-auto flex bg-primary text-white p-4">
      <nuxt-link class="font-bold titleFont uppercase" to="/">
        Cabinet Piacenza
      </nuxt-link>
      <span class="flex-grow"></span>
      <span class="ml-4">
        <nuxt-link to="/">Accueil</nuxt-link>
      </span>
      <span class="ml-4">
        <nuxt-link to="/articles">Articles</nuxt-link>
      </span>
      <span class="ml-4">
        <nuxt-link to="/pouet">pouet</nuxt-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  component: {}
}
</script>
