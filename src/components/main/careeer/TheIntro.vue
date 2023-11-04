<template>
        <section class="flex flex-col gap-[56px] mb-[120px]">
      <div class="relative px-8 ">
        <img :src="careerImage" alt="earth" class="w-full" />
        <div class="arrowTop"></div>
      </div>
      <div class="px-8">
        <h2 class="text-[32px] leading-8 mb-8 text-navy">
          {{ headerIntroduction }}
        </h2>
        <p class="mb-8 text-dimGrey">{{ textIntroduction }}</p>
      </div>
      <TheButton :button="button" class="self-center" />
    </section>
</template>

<script lang="ts">
import careerImage from "../../../assets/career1.webp";
import TheButton from "../../shared/TheButton.vue";
import arrow from "../../../assets/arrow4.svg";

export default {
  name: "CareerIntro",
  components: {
    TheButton,
  },
  data() {
    return {
      careerImage: careerImage,
      arrow: arrow,
      headerIntroduction: "Care to join our mission?",
      textIntroduction:
        "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",
      button: "Say Hello",
    };
  },
};
</script>

<style scoped>
.arrowTop {
  position: absolute;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/arrow4.svg") ;
  background-position: right 100% bottom 15%;
  background-repeat: no-repeat;
  background-size: 150%;
}
</style>