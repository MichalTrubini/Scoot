<template>
  <section class="dt:px-[165px] mt-[120px]">
    <div>
      <h2 class="text-[32px] text-navy mb-[64px] md:text-5xl md:mb-[87px] dt:text-center">
        {{ heading }}
      </h2>
    </div>
    <div class="px-8 flex flex-col gap-[56px] dt:flex-row dt:gap-[40px]">
      <div v-for="(item, index) in content" :key="index" class="dt:text-center">
        <div class="relative">
          <img :src="item.img" alt="join1" class="m-auto w-[240px]" />
          <div
            class="bg-yellow w-[96px] h-[96px] rounded-full flex items-center justify-center text-2xl text-navy fontFamily absolute bottom-[-40px] left-1/2 transform translate-x-[-50%]"
          >
            {{item.number}}
          </div>
        </div>
        <div>
          <h3 class="mb-7 text-2xl text-navy mt-16 md:mt-[87px]">{{ item.subheading }}</h3>
          <p class="text-dimGrey md:max-w-[457px] md:mx-auto">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import join1 from "../../assets/join1.webp";
import join2 from "../../assets/join2.webp";
import join3 from "../../assets/join3.webp";

export default {
  name: "TheValues",
  props: {
    heading: String
  },
  data() {
    return {
      content: [
        {
          img: join1,
          subheading: "Our tech",
          text: "We're using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
          number: "01",
        },
        {
          img: join2,
          subheading: "Our integrity",
          text: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
          number: "02",
        },
        {
          img: join3,
          subheading: "Our community",
          text: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
          number: "03",
        },
      ],
    };
  },
};
</script>

<style scoped>
.fontFamily {
  font-family: "Space Mono", monospace;
}
</style>
