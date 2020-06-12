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
          <nuxt-link to="/" title="Accueil">Accueil</nuxt-link>
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
        <nuxt-link class="nuxtNavLink" to="/">Accueil</nuxt-link>
      </span>
      <span class="ml-4">
        <nuxt-link class="nuxtNavLink" to="/cabinet">Le Cabinet</nuxt-link>
      </span>
      <span class="ml-4">
        <nuxt-link class="nuxtNavLink" to="/accupuncture"
          >Accupunture</nuxt-link
        >
      </span>
      <span class="ml-4">
        <nuxt-link class="nuxtNavLink" to="/articles">Articles</nuxt-link>
      </span>
      <span class="ml-4">
        <nuxt-link class="nuxtNavLink" to="/contact">Contact</nuxt-link>
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
  animation: slideOutLeft $transitionDurationShort linear;
}
.menuSlideLeft-enter-active {
  animation: slideInLeft $transitionDurationShort linear;
}

.burgerButton {
  @apply fixed top-0 left-0 m-1 p-1 rounded-full;
  background-color: rgba(59, 56, 56, 0.48);
  z-index: 5;
}
.slideMenu {
  @apply fixed inset-0 bg-primary shadow-xl bg-white text-primary;
  z-index: 10;
  &Item {
    @apply text-xl font-semibold block m-5;
  }
}

.nuxtNavLink {
  border-bottom: solid 2px;
  border-bottom-color: rgba(0, 0, 0, 0);
  transition: border-bottom-color $transitionDurationLong;
  &.exact-active-link {
    border-bottom-color: white;
  }
}
</style>
