<template>
  <footer>
    <FooterTop />
    <FooterBottom />
  </footer>
</template>

<script lang="ts">
import FooterBottom from "./FooterBottom.vue";
import FooterTop from "./FooterTop.vue";

export default {
  components: {
    FooterBottom,
    FooterTop,
  },
};
</script>
