<template>
  <main>
    <titlebar
      title-text="Accupuncture"
      subtitle-text="Un sous-titre à propos de l'accupuncture"
      background-img="bg_accupuncture.jpg"
    />
    <section id="mainContent" class="container mx-auto animatedContent">
      <tempContent img-url="images/img1.jpg" />
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
