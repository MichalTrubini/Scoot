<template>
  <div
    class="bg-navy py-[88px] px-8 md:py-[62px] lg:flex lg:items-center lg:py-[102px] lg:justify-between dt:px-[165px] footerTop"
  >
    <h3
      class="text-white text-[32px] leading-8 mb-10 md:text-5xl md:w-[425px] md:m-auto md:leading-[48px] lg:text-left lg:m-0 dt:tracking-tighter"
    >
      Sign up and Scoot off today
    </h3>
    <div class="flex gap-4 justify-center md:mt-10 lg:m-0">
      <img
        :src="appleStore"
        alt="appleStore"
        class="inline-block w-[114px] h-10 hover:cursor-pointer dt:w-[159px] dt:h-[56px]"
      />
      <img
        :src="googlePlay"
        alt="googlePlay"
        class="inline-block w-[130px] h-10 hover:cursor-pointer dt:w-[182px] dt:h-[56px]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import appleStore from "../../assets/appleStore.png";
import googlePlay from "../../assets/playStore.png";

export default {
  data() {
    return {
      appleStore: appleStore,
      googlePlay: googlePlay,
    };
  },
};
</script>

<style scoped>
.footerTop {
  background-image: url("../../assets/footerCircles.svg");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: auto 60%;
}

@media screen and (min-width: 768px) {
  .footerTop {
    background-size: auto 50%;
  }

  @media screen and (min-width: 1440px) {
    .footerTop {
      background-size: auto 55%;
    }
  }
}
</style>
