<template>
    <button
      class="bg-yellow text-white text-mobil py-[14px] px-[39px] hover:bg-inherit hover:text-yellow hover:outline hover:outline-4 hover:outline-yellow"
      :class="customClass"
      @click="handleLiClick"
    >
      {{ button }}
    </button>
  </template>
  
  <script lang="ts">
  
  export default {
    name: "GetScootin",
    props: {
      button: {
        type: String,
        required: false,
      },
      customClass: {
        type: String,
        default: "",
      },
      mobileMenu: Boolean,
    },
    methods: {
    handleLiClick() {
      // Emit a signal to the parent only if mobileMenu is true
      if (this.mobileMenu) {
        this.$emit('li-clicked');
      }
    }
  }
  };
  
  </script>
  