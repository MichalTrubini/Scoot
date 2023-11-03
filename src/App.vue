<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<script lang="ts">
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/footer/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
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
