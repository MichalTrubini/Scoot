<template>
  <header class="grid py-[22px] px-8">
    <img :src="burger" alt="burger" class="w-[20px] h-[16px] absolute top-6" />
    <img :src="logo" alt="Vue logo" class="w-[75px] h-[20px] justify-self-center" />
  </header>
</template>

<script lang="ts">
import logo from "../../assets/logo-black.svg";
import burger from "../../assets/burger.svg";

export default {
  name: "TheHeader",
  data() {
    return {
      logo: logo,
      burger: burger,
    };
  },
};
</script>
