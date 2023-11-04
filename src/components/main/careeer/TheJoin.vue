<template>
  <section>
    <div>
      <h2 class="text-[32px] text-navy mb-[64px]">{{ heading }}</h2>
    </div>
    <div class="px-8 flex flex-col gap-[56px]">
      <div>
        <div class="relative">
          <img :src="join1" alt="join1" class="m-auto w-[240px]" />
          <div
            class="bg-yellow w-[96px] h-[96px] rounded-full flex items-center justify-center text-2xl text-navy fontFamily absolute bottom-[-40px] left-1/2 transform translate-x-[-50%]"
          >
            01
          </div>
        </div>
        <h3 class="mb-7 text-2xl text-navy mt-16">{{ subheading1 }}</h3>
        <p class="text-dimGrey">{{ text1 }}</p>
      </div>
      <div>
        <div class="relative">
          <img :src="join2" alt="join1" class="m-auto w-[240px]" />
          <div
            class="bg-yellow w-[96px] h-[96px] rounded-full flex items-center justify-center text-2xl text-navy fontFamily absolute bottom-[-40px] left-1/2 transform translate-x-[-50%]"
          >
            02
          </div>
        </div>
        <h3 class="mb-7 text-2xl text-navy mt-16">{{ subheading2 }}</h3>
        <p class="text-dimGrey">{{ text2 }}</p>
      </div>
      <div>
        <div class="relative">
          <img :src="join3" alt="join1" class="m-auto w-[240px]" />
          <div
            class="bg-yellow w-[96px] h-[96px] rounded-full flex items-center justify-center text-2xl text-navy fontFamily absolute bottom-[-40px] left-1/2 transform translate-x-[-50%]"
          >
            03
          </div>
        </div>
        <h3 class="mb-7 text-2xl text-navy mt-16">{{ subheading3 }}</h3>
        <p class="text-dimGrey">{{ text3 }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import join1 from "../../../assets/join1.webp";
import join2 from "../../../assets/join2.webp";
import join3 from "../../../assets/join3.webp";

export default {
  name: "TheJoin",
  data() {
    return {
      heading: "Why join us?",
      subheading1: "Our tech",
      text1:
        "We're using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
      subheading2: "Our integrity",
      text2:
        "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
      subheading3: "Our community",
      text3:
        "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
      join1: join1,
      join2: join2,
      join3: join3,
    };
  },
};
</script>

<style scoped>
.fontFamily {
  font-family: "Space Mono", monospace;
}
</style>
