<template>
  <main>
    <titlebar
      title-text="Contact"
      subtitle-text="Carte + formulaire de contact"
      background-img="bg_contact.jpg"
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
