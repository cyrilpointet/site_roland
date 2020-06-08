<template>
  <div>
    <div class="titleContainer mb-10">
      <h1 class="titleText">Articles</h1>
    </div>
    <div class="container mx-auto px-2 md:px-0">
      <div
        v-for="(blogPost, index) in blogPosts"
        :key="index"
        class="mb-3 border border-lightgray bg-white overflow-hidden"
      >
        <div class="flex">
          <div class="flex-grow p-3 flex flex-col justify-center">
            <h3 class="titleFont text-2xl font-semibold pt-1">
              {{ blogPost.title }}
            </h3>
            <p>
              {{ blogPost.description }}
            </p>
          </div>

          <div class="cta">
            <nuxt-link
              class="italic p-5 font-semibold ctaTextContainer"
              :to="postLink(blogPost.slug)"
            >
              Voir
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'base',
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

<style lang="scss" scoped>
@import '~assets/css/animations';
@import '~assets/css/variables';

.title {
  &Container {
    @apply w-full h-20 flex items-center justify-center bg-white relative bg-primary;
    &::before {
      @apply absolute inset-0 bg-center bg-no-repeat bg-cover;
      content: '';
      z-index: 0;
      background-image: url('~assets/images/bg_articles.jpg');
      opacity: 0.5;
    }
    height: 300px;
  }
  &Text {
    @apply text-6xl text-white relative;
    animation: zoomInTitle 0.6s ease-out forwards;
  }
}
.cta {
  @apply text-white w-1/2 relative;
  min-height: 150px;
  &TextContainer {
    @apply bg-primary absolute inset-0 flex items-center justify-end;
    clip-path: polygon(60% 100%, 80% 0, 100% 0, 100% 100%);
  }
}
</style>
