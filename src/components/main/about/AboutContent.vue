<template>
  <div class="pt-[72px] md:pt-[120px]">
    <TheIntroAbout />
    <TheValues :heading="heading"/>
    <TheFAQ />
  </div>
</template>

<script lang="ts">
import TheIntroAbout from "./TheIntroAbout.vue";
import TheValues from "../../shared/TheValues.vue";
import TheFAQ from "./TheFAQ.vue";
export default {
  name: "AboutContent",
  data() {
    return {
      heading: "Our values",
    };
  },
  components: {
    TheIntroAbout,
    TheValues,
    TheFAQ,
  },
};
</script>
