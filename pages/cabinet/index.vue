<template>
  <main>
    <titlebar
      title-text="Le Cabinet"
      subtitle-text="Un sous-titre à propos du cabinet"
      :background-img="imgUrl"
    />
    <section id="mainContent" class="container mx-auto animatedContent mb-2">
      <tempContent :img-url="contentImg" />
      <span class="bloc m-2"></span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d725.7307392728793!2d6.0746400292628895!3d43.315872198695914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c93f415d04c545%3A0xb33e6e82de3a9c7f!2s%22Emmanuelle%20Bourguet%20di%C3%A9t%C3%A9ticienne%22%20cabinet%20de%20di%C3%A9t%C3%A9tique%20et%20de%20nutrition%20-Cathy%20Denis-!5e0!3m2!1sfr!2sfr!4v1592032611519!5m2!1sfr!2sfr"
        width="100%"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </section>
  </main>
</template>

<script>
import titlebar from '~/components/titlebar.vue'
import tempContent from '~/components/tempContent.vue'
import bgImg from '~/assets/images/bg_cabinet.jpg'
import contentImg from '~/assets/images/img2.jpg'

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
