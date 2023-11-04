<template>
  <ThePageTitle :title="title" :pageImage="pageImage" />
  <TheIntro />
  <TheValues />
  <TheFAQ />
</template>

<script lang="ts">
import ThePageTitle from "../components/shared/ThePageTitle.vue";
import pageImage from "../assets/page1.webp";
import TheIntro from "../components/main/about/TheIntro.vue";
import TheValues from "../components/main/about/TheValues.vue";
import TheFAQ from "../components/main/about/TheFAQ.vue";

export default {
  name: "Location",
  data() {
    return {
      title: "About",
      pageImage: pageImage,
    };
  },
  components: {
    ThePageTitle,
    TheIntro,
    TheValues,
    TheFAQ,
  },
};
</script>
