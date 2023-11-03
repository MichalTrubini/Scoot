<template>
  <div class="bg-darkGrey pt-16 pb-[88px]">
    <router-link to="/"
      ><img :src="logo" alt="logo" class="m-auto"
    /></router-link>
    <TheNavigation />
    <div class="flex justify-center gap-5 mt-10">
      <img :src="facebook" alt="facebook" />
      <img :src="twitter" alt="twitter" />
      <img :src="instagram" alt="instagram" />
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
