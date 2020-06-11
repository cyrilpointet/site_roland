<template>
  <div>
    <h3 class="text-2xl text-center mb-5">
      Pour demander des informations<br />
      ou prendre rendez-vous au cabinet
    </h3>
    <div v-if="ajaxPending" class="flex justify-center">
      <div class="lds-dual-ring"></div>
    </div>

    <div v-show="!ajaxPending && !formSubmited">
      <form
        class="mb-5"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <div class="flex flex-col">
          <input type="hidden" name="form-name" value="contact" />
          <span>
            <label class="formLabel" for="email">
              Email
              <span v-if="$v.email.$error">Rentrez un email valide</span>
            </label>
            <input
              id="email"
              v-model.trim="$v.email.$model"
              class="formInput"
              type="text"
              name="email"
            />
          </span>
          <span>
            <label class="formLabel" for="phone">
              Téléphone
              <span v-if="$v.phone.$error">Rentrez un numéro de téléphone</span>
            </label>
            <input
              id="phone"
              v-model.trim="$v.phone.$model"
              class="formInput"
              type="number"
              name="phone"
            />
          </span>
          <span>
            <label class="formLabel" for="message">
              Message
              <span v-if="$v.message.$error">Rentrez un message</span>
            </label>
            <textarea
              id="message"
              v-model.trim="$v.message.$model"
              class="formInput formInputArea"
              name="message"
            />
          </span>
          <span class="self-center">
            <button class="btn-dark mt-4">
              Envoyer
            </button>
          </span>
        </div>
      </form>
    </div>

    <div
      v-if="!ajaxPending && formSubmited && !formSubmitedError"
      class="my-10"
    >
      <p class="text-lg font-semibold text-center">
        Votre message a bien été envoyé
      </p>
      <p class="text-center">
        Vous serez recontacté dans les plus brefs délais
      </p>
    </div>

    <div v-if="!ajaxPending && formSubmited && formSubmitedError" class="my-10">
      <p class="text-lg font-semibold text-center">
        Un problème est survenu
      </p>
      <p class="text-center">
        Veuillez réessayer plus tard
      </p>
    </div>
  </div>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: null,
      phone: null,
      message: null,
      ajaxPending: false,
      formSubmited: false,
      formSubmitedError: false
    }
  },
  validations: {
    email: {
      required,
      email
    },
    phone: {
      required,
      numeric
    },
    message: {
      required
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.ajaxPending = true
        const data = {
          email: this.email,
          phone: this.phone,
          message: this.message
        }
        fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            body: this.encode({ 'form-name': 'contact', ...data })
          }
        })
          .then((response) => {
            if (response.ok) {
              this.ajaxPending = false
              this.formSubmited = true
            } else {
              throw new Error(response.statusText)
            }
          })
          .catch(() => {
            this.ajaxPending = false
            this.formSubmited = true
            this.formSubmitedError = true
          })
      }
    }
  }
}
</script>

<style lang="scss">
.formLabel {
  @apply block;
  & span {
    @apply text-xs italic font-light ml-2 text-error;
  }
  &:focus {
    color: red;
  }
}
.formInput {
  @apply block p-2 border-2 border-lightgray w-full mb-2;
  transition: all 0.2s;
  box-sizing: border-box;
  &:focus {
    @apply border-secondary-dark;
    outline: none !important;
  }
  &Area {
    height: 8rem;
  }
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  @apply border-secondary-dark;
  content: ' ';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid;
  border-color: #4d664d transparent #4d664d transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
