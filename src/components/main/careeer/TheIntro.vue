<template>
  <section class="flex flex-col gap-[56px] mb-[120px] dt:pl-[165px] dt:flex-row-reverse dt:items-center dt:justify-between">
    <div class="relative px-8 dt:px-0 dt:max-w-[750px] dt:w-full">
      <img :src="careerImage" alt="earth" class="w-full max-w-[445px] m-auto dt:m-0 dt:relative dt:left-[150px]" />
      <div class="arrowTop circle"></div>
    </div>
    <div class="px-8 dt:max-w-[445px] dt:px-0">
      <h2 class="text-[32px] leading-8 mb-8 text-navy md:text-5xl dt:mb-6 dt:tracking-tighter">
        {{ headerIntroduction }}
      </h2>
      <p class="mb-8 text-dimGrey md:max-w-[573px] md:m-auto md:mb-10 dt:leading-6">{{ textIntroduction }}</p>
      <TheButton :button="button" class="self-center" />
    </div>
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
  background: url("../../../assets/arrow4.svg") right 100% bottom 15% / 150%
    no-repeat;
}

@media screen and (min-width: 768px) {
  .arrowTop {
    background: url("../../../assets/arrow4.svg") right 100% bottom 0% / 100%
        no-repeat,
      url("../../../assets/introCircle.svg") right 0% bottom 50% / 118px
        no-repeat;
  }
}

@media screen and (min-width: 1440px) {
  .arrowTop {
    background: url("../../../assets/arrow4.svg") right 100% bottom 0% / 100%
        no-repeat,
      url("../../../assets/introCircle.svg") right -3% bottom 50% / 100px
        no-repeat;
  }
}
</style>
