<template>
  <div
    class="bg-darkGrey pt-16 pb-[88px] md:flex md:items-center md:justify-between md:px-10 md:py-8 dt:px-[165px]"
  >
    <div class="md:flex md:items-center md:gap-[60px]">
      <router-link to="/"
        ><img :src="logo" alt="logo" class="m-auto"
      /></router-link>
      <TheNavigation />
    </div>
    <div class="flex justify-center gap-5 mt-10 md:mt-0">
      <img :src="facebook" alt="facebook" class="social hover:cursor-pointer"/>
      <img :src="twitter" alt="twitter" class="social hover:cursor-pointer"/>
      <img :src="instagram" alt="instagram" class="social hover:cursor-pointer"/>
    </div>
  </div>
</template>

<script lang="ts">
import logo from "../../assets/logo-white.svg";
import TheNavigation from "../shared/TheNavigation.vue";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      logo: logo,
      facebook: facebook,
      twitter: twitter,
      instagram: instagram,
    };
  },
};
</script>

<style scoped>
.social:hover {
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(1%) hue-rotate(103deg) brightness(100%) contrast(100%);
}

</style>
