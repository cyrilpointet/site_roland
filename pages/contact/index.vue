<template>
  <main>
    <titlebar
      title-text="Contact"
      subtitle-text="Nous trouver, nous contacter"
      :background-img="imgUrl"
    />
    <section
      id="mainContent"
      class="animatedContent container mx-auto px-2 md:px-0 py-3"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <contactForm />
        <adressCard />
      </div>

      <iframe
        width="100%"
        height="350"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=6.072998642921449%2C43.31515143236215%2C6.077477931976319%2C43.31689414343313&amp;layer=mapnik&amp;marker=43.31602376990703%2C6.075238287448883"
        style="border: 1px solid black"
      ></iframe>
    </section>
  </main>
</template>

<script>
import titlebar from '~/components/titlebar.vue'
import adressCard from '~/components/contact/adressCard.vue'
import contactForm from '~/components/contact/contactForm.vue'
import bgImg from '~/assets/images/bg_contact.jpg'

export default {
  layout: 'base',
  components: { titlebar, adressCard, contactForm },
  computed: {
    imgUrl() {
      return bgImg
    }
  }
}
</script>
