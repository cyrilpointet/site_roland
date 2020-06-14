<template>
  <nuxt-link :to="postLink(blogpost.slug)" class="card">
    <div class="flex flex-col cardInner">
      <div class="p-3 flex flex-col flex-grow">
        <h3 class="titleFont text-2xl font-semibold pt-1">
          {{ post.title }}
        </h3>
        <p class="text-sm italic mb-4">
          {{ post.created }}
        </p>
        <p>
          {{ post.description }}
        </p>
      </div>

      <div class="cta">Voir<i class="icon-right-open"></i></div>
    </div>
  </nuxt-link>
</template>

<script>
import { BlogPost } from '../../models/blogPost'

export default {
  props: ['blogpost'],
  computed: {
    post() {
      return new BlogPost(this.blogpost)
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
.card {
  @apply border border-lightgray bg-white shadow-xs overflow-hidden block transition-all duration-200 rounded-lg;
  height: 100%;
  &:hover {
    @apply bg-primary text-white shadow-md;
  }
  &Inner {
    height: 100%;
  }
}
.cta {
  @apply text-white bg-secondary-dark text-right italic p-5;
  clip-path: polygon(60% 100%, 80% 0, 100% 0, 100% 100%);
}
</style>
