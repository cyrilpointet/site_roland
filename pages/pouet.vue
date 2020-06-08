<template>
  <div>
    <h1 class="p-10 text-6xl">pouet pouet</h1>
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

$sm-path: polygon(0 0, 100% 0, 100% 60%, 0 90%);
$md-path: polygon(0 0, 100% 0%, 25% 100%, 0% 100%);
$lg-path: polygon(0 0, 80% 0%, 50% 100%, 0% 100%);

.background {
  @apply fixed inset-0;
  z-index: -1;
  &Under {
    @apply bg-white bg-no-repeat bg-contain bg-right-bottom opacity-0;
    animation: fadeIn 0.4s ease-out forwards;
    animation-delay: 0.4s;
    background-image: url('~assets/images/bg1.jpg');
  }
  &Upper {
    @apply bg-primary;
    animation: openSm 0.4s ease-out forwards;
  }
  &Spacer {
    display: block;
    height: 10%;
  }
}

.animatedText {
  @apply opacity-0;
  animation: fadeInLeft 1s ease-out forwards;
}

@for $i from 1 through 5 {
  .animatedText:nth-child(#{$i}n) {
    animation-delay: #{($i - 1) * 0.25}s;
  }
}

.animatedButton {
  @apply opacity-0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.5s;
}

// responsive --------------------------------------------------

@screen md {
  .background {
    &Upper {
      animation: openMd 0.4s ease-out forwards;
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
      animation: openLg 0.4s ease-out forwards;
    }
    &Spacer {
      display: block;
      height: 25%;
    }
  }
}

// animations --------------------------------------------------

@keyframes openSm {
  from {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: $sm-path;
  }
}

@keyframes openMd {
  from {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: $md-path;
  }
}

@keyframes openLg {
  from {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: $lg-path;
  }
}
</style>
