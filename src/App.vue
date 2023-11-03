<template>
  <div class="max-w-[1440px] m-auto">
  <TheHeader />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</div>
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
