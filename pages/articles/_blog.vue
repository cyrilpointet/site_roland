<template>
  <div class="blogPost">
    <h1>{{ blogPost.title }}</h1>
    <div v-html="$md.render(blogPost.body)" />
    <nuxt-link :to="'/articles'">go</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'base',
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
  }
}
</script>

<style lang="scss">
.blogPost {
  & h1,
  h2,
  h3,
  h4 {
    @apply text-xl;
    color: blue;
  }
}
</style>
