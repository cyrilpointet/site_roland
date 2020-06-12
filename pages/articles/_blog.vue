<template>
  <div class="blogPost">
    <articlebar :title-text="blogPost.title" />
    <div class="container mx-auto blogPostContent">
      <nuxt-link :to="'/articles'">
        <span class="my-2 flex items-center">
          <i class="icon-left-open"></i>
          Retour
        </span>
      </nuxt-link>
      <main class="animatedContent">
        <h1>{{ blogPost.title }}</h1>
        <div v-html="$md.render(blogPost.body)" />
      </main>
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
  },
  head() {
    return {
      title: "Cabinets d'accupuncture à Saint Maximin et Rocbaron",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Lorem ipsum et...'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.blogPost {
  &Content {
    & h1 {
      @apply text-6xl my-4;
      font-family: 'Hind Vadodara', sans-serif;
    }
    & h2 {
      @apply text-4xl my-3;
      font-family: 'Hind Vadodara', sans-serif;
    }
    & h3 {
      @apply text-2xl my-2;
      font-family: 'Hind Vadodara', sans-serif;
    }
    & h4 {
      @apply text-xl my-1;
      font-family: 'Hind Vadodara', sans-serif;
    }
    & h5 {
      @apply text-lg my-1;
      font-family: 'Hind Vadodara', sans-serif;
    }
    & h6 {
      @apply font-semibold;
      font-family: 'Hind Vadodara', sans-serif;
    }
  }
}
</style>
