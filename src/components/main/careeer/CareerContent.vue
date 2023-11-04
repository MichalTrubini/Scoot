<template>
  <div class="pt-[72px] md:pt-[120px]">
    <TheIntroCareer />
    <TheValues :heading="heading"/>
    <TheRoles />
  </div>
</template>

<script lang="ts">
import TheButton from "../../shared/TheButton.vue";
import TheIntroCareer from "./TheIntroCareer.vue";
import TheRoles from "./TheRoles.vue";
import TheValues from "../../shared/TheValues.vue";

export default {
  name: "CareerContent",
  data() {
    return {
      heading: "Why join us?",
    };
  },
  components: {
    TheButton,
    TheIntroCareer,
    TheValues,
    TheRoles
},
};
</script>


