<template>
  <header class="py-[22px] px-8 md:px-10 dt:px-[165px]">
    <div v-if="isSmallScreen" class="grid">
      <img
        :src="burger"
        alt="burger"
        class="w-[20px] h-[16px] absolute top-6"
      />
      <router-link to="/" class="justify-self-center">
        <img
          :src="logo"
          alt="Vue logo"
          class="w-[75px] h-[20px] "
      /></router-link>
    </div>
    <div v-else class="flex items-center justify-between">
      <div class="flex gap-[60px] items-center">
        <router-link to="/"
          ><img :src="logo" alt="Vue logo" class="w-[75px] h-[20px]"
        /></router-link>
        <TheNavigation />
      </div>
      <GetScootin />
    </div>
  </header>
</template>

<script lang="ts">
import logo from "../../assets/logo-black.svg";
import burger from "../../assets/burger.svg";
import TheNavigation from "../shared/TheNavigation.vue";
import GetScootin from "../shared/GetScootin.vue";

export default {
  name: "TheHeader",
  data() {
    return {
      logo: logo,
      burger: burger,
      isSmallScreen: false,
    };
  },
  methods: {
    handleResize() {
      this.isSmallScreen = window.innerWidth < 768;
    },
  },
  mounted() {
    this.isSmallScreen = window.innerWidth < 768;
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  components: { TheNavigation, GetScootin },
};
</script>
