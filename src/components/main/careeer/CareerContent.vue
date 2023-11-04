<template>
  <div class="pt-[72px]">
    <TheIntro />
    <TheJoin />
    <TheRoles />
  </div>
</template>

<script lang="ts">
import TheButton from "../../shared/TheButton.vue";
import TheIntro from "./TheIntro.vue";
import TheJoin from "./TheJoin.vue";
import TheRoles from "./TheRoles.vue";

export default {
  name: "CareerContent",
  components: {
    TheButton,
    TheIntro,
    TheJoin,
    TheRoles
},
  data() {
    return {

    };
  },
};
</script>


