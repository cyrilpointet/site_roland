<template>
  <div class="mb-5">
    <h3 class="text-2xl text-center mb-5">
      Pour demander des informations<br />
      ou prendre rendez-vous au cabinet
    </h3>
    <div class="flex flex-col">
      <span>
        <label class="formLabel" for="email">email</label>
        <input id="email" class="formInput" type="text" name="email" />
      </span>
      <span>
        <label class="formLabel" for="pouet">email</label>
        <input id="pouet" class="formInput" type="text" name="pouet" />
      </span>
      <span>
        <label class="formLabel" for="toto">email</label>
        <textarea id="toto" class="formInput formInputArea" name="toto" />
      </span>
      <span class="self-center">
        <button class="btn-dark mt-4">
          Envoyer
        </button>
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.formLabel {
  @apply block;
  &:focus {
    color: red;
  }
}
.formInput {
  @apply block p-2 border border-lightgray w-full mb-2;
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
</style>
