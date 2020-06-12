<template>
  <main>
    <titlebar
      title-text="Articles"
      subtitle-text="la liste de tous les posts"
      :background-img="imgUrl"
    />
    <section id="mainContent" class="animatedContent">
      <div
        class="container mx-auto px-2 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div v-for="(blogPost, index) in blogPosts" :key="index">
          <postCard :blogpost="blogPost" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import titlebar from '~/components/titlebar.vue'
import postCard from '~/components/articles/postCard.vue'
import bgImg from '~/assets/images/bg_articles.jpg'

export default {
  layout: 'base',
  components: {
    titlebar,
    postCard
  },
  computed: {
    imgUrl() {
      return bgImg
    },
    blogPosts() {
      return this.$store.state.blogPosts
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
