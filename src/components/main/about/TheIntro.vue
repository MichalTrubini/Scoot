<template>
  <section
    class="flex flex-col gap-[56px] mb-[120px] dt:pl-[165px] dt:flex-row-reverse dt:items-center dt:justify-between"
  >
    <div class="relative px-8 dt:px-0 dt:max-w-[750px] dt:w-full">
      <img
        :src="mobility"
        alt="earth"
        class="w-full max-w-[445px] m-auto dt:m-0 dt:relative dt:left-[150px]"
      />
      <div class="arrowTop circle"></div>
    </div>
    <div class="px-8 dt:max-w-[445px] dt:px-0">
      <h2
        class="text-[32px] leading-8 mb-8 text-navy md:text-5xl dt:mb-6 dt:tracking-tighter"
      >
        {{ headerIntroduction }}
      </h2>
      <p
        class="mb-8 text-dimGrey md:max-w-[573px] md:m-auto md:mb-10 dt:leading-6"
      >
        {{ textIntroduction }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import mobility from "../../../assets/mobility.webp";
import living from "../../../assets/living.webp";
export default {
  name: "TheIntro",
  data() {
    return {
      mobility: mobility,
      living: living,
      headerIntroduction: "Mobility for the digital era",
      textIntroduction:
        "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
    };
  },
};
</script>
