<template>
  <div class="px-8 pt-[115px] pb-[180px] backgroundImage relative">
    <h1 class="text-white text-[40px] leading-10 mb-6">{{ title }}</h1>
    <p class="text-white text-mobil leading-6 mb-8">{{ text }}</p>
    <button class="bg-yellow text-white text-mobil py-[14px] px-[39px]">
      {{ button }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "TheHero",
  data() {
    return {
      title: "Scooter sharing made simple",
      text: " Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!",
      button: "Get Scootin",
    };
  },
};
</script>

<style scoped>
.backgroundImage {
  background: url("../../../assets/arrow1.svg") -300px 95% no-repeat,
    url("../../../assets/hero.webp") right/cover no-repeat;
}
</style>
