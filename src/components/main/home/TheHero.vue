<template>
  <div
    class="px-8 pb-[65px] backgroundImage relative md:pt-[137px] md:pb-[217px] dt:py-[153px] dt:px-[165px] flex flex-col justify-center"
    :style="{ height: isSmallScreen ? (screenHeight - headerHeight) + 'px' : 'auto' }"
    ref="heroElement"
  >
    <div>
      <h1
        class="text-white text-[40px] leading-10 mb-6 md:text-[56px] md:leading-[56px] md:w-[550px] md:mx-auto dt:mx-0 dt:mb-10"
      >
        {{ title }}
      </h1>
      <p
        class="text-white text-mobil leading-6 mb-8 md:w-[550px] md:mx-auto dt:mx-0 dt:pl-[95px] dt:mb-10"
      >
        {{ text }}
      </p>
      <div class="dt:ml-[95px]">
        <TheButton :button="button" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TheButton from "../../shared/TheButton.vue";
import { inject, ref, Ref } from "vue";

export default {
  name: "TheHero",
  components: { TheButton },
  setup() {
    const title = ref("Scooter sharing made simple");
    const text = ref("Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!");
    const button = ref("Get Scootin");
    const isSmallScreen = inject('isSmallScreen', ref(false)) as Ref<boolean>;
    const screenHeight = inject('screenHeight', ref(0)) as Ref<number>;
    const headerHeight = inject('headerHeight', 64) as number;

    return {
      title,
      text,
      button,
      isSmallScreen,
      screenHeight,
      headerHeight,
    };
  },
};
</script>

<style scoped>
.backgroundImage {
  background: url("../../../assets/arrow1.svg") -300px 95% no-repeat,
    url("../../../assets/hero.webp") right/cover no-repeat;
}

@media screen and (min-width: 768px) {
  .backgroundImage {
    background: url("../../../assets/arrow1.svg") -120px 95% no-repeat,
      url("../../../assets/heroCircles.svg") right 93% no-repeat,
      url("../../../assets/hero.webp") 80% no-repeat;
  }
}

@media screen and (min-width: 1440px) {
  .backgroundImage {
    background: url("../../../assets/arrow1.svg") 75% 67% no-repeat,
      url("../../../assets/line.svg") 0% 53% no-repeat,
      url("../../../assets/heroCircles.svg") right 70% no-repeat,
      url("../../../assets/hero.webp") 80% no-repeat;
  }
}
</style>
