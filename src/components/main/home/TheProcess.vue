<template>
  <section class="flex flex-col gap-[48px] my-[120px] px-8 md:px-[97px] dt:flex-row dt:px-[165px] dt:mt-[160px] dt:mb-[200px]">
    <div
      v-for="(step, index) in process"
      :key="index"
      class="md:flex md:items-start md:gap-[80px] dt:flex-col dt:gap-[40px]"
    >
      <div
        class="bg-yellow w-[56px] h-[56px] rounded-full flex items-center justify-center mx-auto mb-6 customLine relative dt:mx-0 dt:w-[96px] dt:h-[96px]"
      >
        <img :src="step.img" alt="highlight" />
      </div>
      <div class="md:text-left md:w-[70%] dt:w-full">
        <h3 class="text-navy text-xl mb-6 md:text-2xl">
          {{ step.title }}
        </h3>
        <p class="text-dimGrey">{{ step.description }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import locate from "../../../assets/locate.svg";
import scooter from "../../../assets/scooter.svg";
import scooter2 from "../../../assets/scooter2.svg";

export default {
  name: "TheProcess",
  data() {
    return {
      process: [
        {
          title: "Locate with app",
          description:
            "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
          img: locate,
        },
        {
          title: "Pick your scooter",
          description:
            "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
          img: scooter,
        },
        {
          title: "Enjoy the ride",
          description:
            "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
          img: scooter2,
        },
      ],
    };
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .customLine::before {
    content: "";
    position: absolute;
    bottom: 0;
    background-color: #e5ecf4;
    width: 10px;
    height: 200px;
    z-index: -1;
  }
}

@media screen and (min-width: 1440px) {
  .customLine::before {
    right: 56px;
    bottom: 0;
    top: 43px;
    width: 400px;
    height: 15px;

  }
}
</style>
