<template>
    <button
      class="bg-yellow text-white text-mobil py-[14px] px-[39px] "
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
        required: true,
      },
    },
  };
  
  </script>
  