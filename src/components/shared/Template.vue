<template>
  <section
    class="flex flex-col gap-[56px] dt:items-center dt:justify-between" :class="flexFlow"
  >
    <div class="relative px-8 dt:px-0 dt:max-w-[750px] dt:w-full">
      <img
        :src="image"
        alt="earth"
        class="w-full max-w-[445px] m-auto dt:m-0 dt:relative dt:left-[150px]"
      />
      <div :class="customClass"></div>
    </div>
    <div class="px-8 dt:max-w-[445px] dt:px-0">
      <h2
        class="text-[32px] leading-8 mb-8 text-navy md:text-5xl dt:mb-6 tracking-tighter"
      >
        {{ title }}
      </h2>
      <p
        class="mb-8 text-dimGrey md:max-w-[573px] md:m-auto md:mb-10 dt:leading-6"
      >
        {{ text }}
      </p>
      <div v-if="show">
        <TheButton :button="buttonText" class="self-center" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import TheButton from "./TheButton.vue";

export default {
  name: "Template",
  components: {
    TheButton,
  },
  props: {
    title: String,
    text: String,
    show: Boolean,
    image: String,
    buttonText: String,
    customClass: String,
    flexFlow: String,
  },
};
</script>