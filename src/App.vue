<template>
  <TheHeader />
  <main>
    <TheHero />
  </main>
</template>

<script lang="ts">
import TheHeader from "./components/header/TheHeader.vue";
import TheHero from "./components/main/home/TheHero.vue";

export default {
  components: {
    TheHeader,
    TheHero,
  },
};
</script>

<style>
body {
  font-family: "Lexend Deca", sans-serif;

  text-align: center;
}

h1 {
  font-family: "Space Mono", monospace;
}
</style>
