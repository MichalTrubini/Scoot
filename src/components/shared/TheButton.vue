<template>
    <button
      class="bg-yellow text-white text-mobil py-[14px] px-[39px] hover:bg-inherit hover:text-yellow hover:outline hover:outline-4 hover:outline-yellow"
      :class="customClass"
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
    },
  };
  
  </script>
  