<template>
  <div class="hpBackground">
    <div class="hpBackground hpBackgroundUnder"></div>
    <div class="hpBackground hpBackgroundUpper"></div>
    <div class="hpBackground flex flex-col">
      <span class="hpBackgroundSpacer"></span>
      <div class="container mx-auto px-5 md:px-0 text-white">
        <div class="hpAnimatedText">
          <h1 class="titleFont text-3xl md:text-6xl">
            Cabinet Piacenza
          </h1>
          <h2 class="text-xl md:text-2xl titleFont">
            Accupuncteur diplômé
          </h2>
          <h3 class="text-xl md:text-3xl titleFont mt-5">
            Accupucture - Chi-gong - Diététique
          </h3>
        </div>

        <p class="w-full md:w-1/2 mt-5 hpAnimatedFadeIn">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes
        </p>
        <div class="hpAnimatedFadeIn mt-5 flex">
          <nuxt-link to="/contact" class="btn-light btn-light-small">
            Demande d'informations
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'base',
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/fonts';
@import '~assets/css/animations';
@import '~assets/css/variables';

.hpBackground {
  @apply fixed inset-0;
  &Under {
    @apply bg-white bg-no-repeat bg-contain bg-right-bottom opacity-0;
    animation: fadeIn $transitionDurationLong ease-out forwards;
    animation-delay: $transitionDurationLong;
    background-image: url('~assets/images/bg1.jpg');
  }
  &Upper {
    @apply bg-primary;
    animation: slideInLeft $transitionDurationLong ease-out;
    clip-path: $sm-path;
  }
  &Spacer {
    display: block;
    height: 10%;
  }
}

.hpAnimatedText {
  @apply opacity-0;
  animation: fadeInDown 0.3s ease-out forwards;
  animation-delay: 0.5s;
}

.hpAnimatedFadeIn {
  @apply opacity-0;
  animation: fadeIn 0.8s ease-out forwards;
  animation-delay: 0.8s;
}

// responsive --------------------------------------------------

@screen md {
  .hpBackground {
    &Upper {
      clip-path: $md-path;
      animation: fadeInLeft $transitionDurationLong ease-out;
    }
    &Spacer {
      display: block;
      height: 25%;
    }
  }
}

@screen lg {
  .hpBackground {
    &Upper {
      clip-path: $lg-path;
    }
  }
}
</style>
