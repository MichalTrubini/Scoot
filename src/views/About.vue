<template>
  <div>
    <ThePageTitle :title="title" :pageImage="pageImage" />
    <AboutContent />
  </div>
</template>

<script lang="ts">
import ThePageTitle from "../components/shared/ThePageTitle.vue";
import pageImage from "../assets/page1.webp";
import AboutContent from "../components/main/about/AboutContent.vue";

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
    AboutContent,
  },
};
</script>
