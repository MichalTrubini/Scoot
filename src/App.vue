<template>
  <div class="max-w-[1440px] m-auto overflow-hidden">
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

h1,
h2,
h3 {
  font-family: "Space Mono", monospace;
}

p {
  font-size: 0.9375rem;
}

@media screen and (min-width: 1440px) {
  body {
    text-align: left;
  }
}
</style>
