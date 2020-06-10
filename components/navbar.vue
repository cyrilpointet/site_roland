<template>
  <nav class="bg-primary text-white myNav">
    <div class="burgerButton flex md:hidden" @click="isMenuOpen = true">
      <i class="material-icons text-4xl">menu</i>
    </div>
    <transition name="menuSlideLeft">
      <div v-if="isMenuOpen === true" class="slideMenu block md:hidden pt-5">
        <i
          class="material-icons text-4xl fixed top-0 right-0 p-2"
          @click="isMenuOpen = false"
          >close</i
        >
        <span class="slideMenuItem" @click="isMenuOpen = false">
          <nuxt-link to="/">Accueil</nuxt-link>
        </span>
        <span class="slideMenuItem" @click="isMenuOpen = false">
          <nuxt-link to="/cabinet">Le Cabinet</nuxt-link>
        </span>
        <span class="slideMenuItem" @click="isMenuOpen = false">
          <nuxt-link to="/accupuncture">Accupunture</nuxt-link>
        </span>
        <span class="slideMenuItem" @click="isMenuOpen = false">
          <nuxt-link to="/articles">Articles</nuxt-link>
        </span>
        <span class="slideMenuItem" @click="isMenuOpen = false">
          <nuxt-link to="/contact">Contact</nuxt-link>
        </span>
      </div>
    </transition>
    <div class="container mx-auto bg-primary text-white p-4 hidden md:flex">
      <nuxt-link class="font-bold titleFont uppercase" to="/">
        Cabinet Piacenza
      </nuxt-link>
      <span class="flex-grow"></span>
      <span class="ml-4">
        <nuxt-link to="/">Accueil</nuxt-link>
      </span>
      <span class="ml-4">
        <nuxt-link to="/cabinet">Le Cabinet</nuxt-link>
      </span>
      <span class="ml-4">
        <nuxt-link to="/accupuncture">Accupunture</nuxt-link>
      </span>
      <span class="ml-4">
        <nuxt-link to="/articles">Articles</nuxt-link>
      </span>
      <span class="ml-4">
        <nuxt-link to="/contact">Contact</nuxt-link>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables';
@import '~assets/css/animations.scss';

.myNav {
  position: relative;
  z-index: 1;
}
.menuSlideLeft-leave-active {
  animation: slideOutLeft $transitionPageDuration linear;
}
.menuSlideLeft-enter-active {
  animation: slideInLeft $transitionPageDuration linear;
}

.burgerButton {
  @apply absolute top-0 left-0 m-1 p-1 bg-primary rounded-full;
  z-index: 5;
}
.slideMenu {
  @apply fixed inset-0 bg-primary shadow-xl bg-white text-primary;
  z-index: 10;
  &Item {
    @apply text-xl font-semibold block m-5;
  }
}
</style>
