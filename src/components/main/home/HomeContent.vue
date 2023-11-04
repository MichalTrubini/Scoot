<template>
  <TheHero />
  <TheProcess />
  <TheHighlights />
</template>

<script lang="ts">
import TheHero from "./TheHero.vue";
import TheProcess from "./TheProcess.vue";
import TheHighlights from "./TheHighlights.vue";

export default {
  components: {
    TheHero,
    TheProcess,
    TheHighlights,
  },
};
</script>
