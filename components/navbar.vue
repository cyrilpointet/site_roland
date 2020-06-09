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
        <nuxt-link to="/accupuncture">Accupunture</nuxt-link>
      </span>
      <span class="ml-4">
        <nuxt-link to="/articles">Articles</nuxt-link>
      </span>
    </div>
  </div>
</template>

<script>
import titlebar from '~/components/titlebar.vue'
export default {
  component: { titlebar }
}
</script>
