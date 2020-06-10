<template>
  <main>
    <titlebar
      title-text="Le Cabinet"
      subtitle-text="Un sous-titre à propos du cabinet"
      background-img="bg_cabinet.jpg"
    />
    <section id="mainContent" class="container mx-auto animatedContent mb-2">
      <tempContent img-url="images/img2.jpg" />
      <span class="bloc m-2"></span>
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
import tempContent from '~/components/tempContent.vue'

export default {
  layout: 'base',
  components: { titlebar, tempContent }
}
</script>
