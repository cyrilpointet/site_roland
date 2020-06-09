<template>
  <main>
    <titlebar
      title-text="Le Cabinet"
      subtitle-text="Inclus une brêve description du cabinet"
      background-img="bg_cabinet.jpg"
    />
    <section id="mainContent" class="container mx-auto animatedContent">
      <h1>Bla bla Contact</h1>
    </section>
  </main>
</template>

<script>
import titlebar from '~/components/titlebar.vue'

export default {
  layout: 'base',
  components: { titlebar }
}
</script>
