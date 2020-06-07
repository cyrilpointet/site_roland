<template>
  <h1>blogPost</h1>
  <div>
    <p v-for="(blogPost, index) in blogPosts" :key="index">
      {{ blogPost.title }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>
