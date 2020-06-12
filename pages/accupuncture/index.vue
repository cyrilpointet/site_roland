<template>
  <main>
    <titlebar
      title-text="Accupuncture"
      subtitle-text="Un sous-titre à propos de l'accupuncture"
      :background-img="imgUrl"
    />
    <section id="mainContent" class="container mx-auto animatedContent">
      <tempContent :img-url="contentImg" />
    </section>
  </main>
</template>

<script>
import titlebar from '~/components/titlebar.vue'
import tempContent from '~/components/tempContent.vue'
import bgImg from '~/assets/images/bg_accupuncture.jpg'
import contentImg from '~/assets/images/img1.jpg'

export default {
  layout: 'base',
  components: { titlebar, tempContent },
  computed: {
    imgUrl() {
      return bgImg
    },
    contentImg() {
      return contentImg
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
