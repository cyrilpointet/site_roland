<template>
  <div class="background">
    <div class="background backgroundUnder"></div>
    <div class="background backgroundUpper"></div>
    <div class="background flex flex-col">
      <span class="backgroundSpacer"></span>
      <div class="container mx-auto px-5 md:px-0 text-white">
        <div class="animatedText">
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

        <p class="w-full md:w-1/2 mt-5 animatedButton">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa
        </p>
        <div class="animatedButton mt-5">
          <button
            class="border border-white py-2 px-4 uppercase cursor-pointer rounded-full"
          >
            Demande d'informations
          </button>
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

.background {
  @apply fixed inset-0;
  z-index: -2;
  &Under {
    @apply bg-white bg-no-repeat bg-contain bg-right-bottom opacity-0;
    animation: fadeIn $transitionDuration ease-out forwards;
    animation-delay: $transitionDuration;
    background-image: url('~assets/images/bg1.jpg');
  }
  &Upper {
    @apply bg-primary;
    animation: fadeInDown $transitionDuration ease-out;
    clip-path: $sm-path;
  }
  &Spacer {
    display: block;
    height: 10%;
  }
}

.animatedText {
  @apply opacity-0;
  animation: fadeInDown 0.3s ease-out forwards;
  animation-delay: 0.5s;
}

.animatedButton {
  @apply opacity-0;
  animation: fadeIn 0.8s ease-out forwards;
  animation-delay: 0.8s;
}

// responsive --------------------------------------------------

@screen md {
  .background {
    &Upper {
      clip-path: $md-path;
      animation: fadeInLeft $transitionDuration ease-out;
    }
    &Spacer {
      display: block;
      height: 25%;
    }
  }
}

@screen lg {
  .background {
    &Upper {
      clip-path: $lg-path;
    }
  }
}
</style>
