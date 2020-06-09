<template>
  <div class="blogPost">
    <articlebar :title-text="blogPost.title" />
    <nuxt-link :to="'/articles'">Retour</nuxt-link>
    <div class="container mx-auto blogPostContent">
      <h1>{{ blogPost.title }}</h1>
      <div v-html="$md.render(blogPost.body)" />
    </div>
  </div>
</template>

<script>
import { BlogPost } from '~/models/blogPost'
import articlebar from '~/components/articlebar'

export default {
  layout: 'base',
  components: { articlebar },
  async asyncData({ params, payload }) {
    if (payload) {
      return { blogPost: payload }
    } else {
      const rawPost = await require(`~/assets/content/blog/${params.blog}.json`)
      return {
        blogPost: new BlogPost(rawPost)
      }
    }
  }
}
</script>

<style lang="scss">
.blogPost {
  &Content {
    & h1,
    h2,
    h3,
    h4 {
      @apply text-xl;
      color: blue;
    }
  }
}
</style>
