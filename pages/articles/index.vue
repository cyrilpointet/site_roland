<template>
  <div>
    <h1 class="m-5 text-xl">Articles</h1>
    <div
      v-for="(blogPost, index) in blogPosts"
      :key="index"
      class="mb-3 mx-5 border boder-primary"
    >
      <h3 class="bg-primary text-white p-2">
        {{ blogPost.title }}
      </h3>
      <div class="flex p-3">
        <p class="flex-grow">
          {{ blogPost.description }}
        </p>
        <nuxt-link class="italic" :to="postLink(blogPost.slug)">Voir</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'base',
  // pageTransition: 'totopouet',
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  },
  methods: {
    postLink(slug) {
      return '/articles/' + slug
    }
  }
}
</script>
