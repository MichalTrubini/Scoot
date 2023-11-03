<template>
  <div class="px-8 py-[72px] md:px-10 md:py-[120px] dt:px-[165px]">
    <img
      :src="isSmallScreen ? earthImage : earthImage2"
      alt="earth"
      class="w-full h-auto mb-10 md:mb-[64px]"
    />
    <div v-if="isSmallScreen" class="flex flex-col gap-4 mb-[72px]">
      <h3
        v-for="(city, index) in cities"
        :key="index"
        class="text-navy text-2xl py-[22px] bg-lightYellow "
      >
        {{ city }}
      </h3>
    </div>
    <div class="dt:flex dt:items-center dt:gap-0 dt:justify-between">
      <h3
        class="text-[32px] leading-8 text-navy mb-8 md:text-[48px] md:w-[450px] md:mx-auto md:leading-[48px] md:mb-10 dt:mb-0 dt:w-[350px] dt:mx-0"
      >
        {{ header }}
      </h3>
      <p class="text-dimGrey leading-6 mb-8 md:w-[590px] md:mx-auto md:mb-10 dt:w-[440px] dt:mb-0 dt:mx-0">
        {{ text }}
      </p>
      <TheButton :button="button" />
    </div>
  </div>
</template>

<script lang="ts">
import earthImage from "../../../assets/earth.webp";
import earthImage2 from "../../../assets/earth2.webp";
import TheButton from "../../shared/TheButton.vue";
export default {
  name: "Content",
  data() {
    return {
      earthImage: earthImage,
      earthImage2: earthImage2,
      cities: ["New York", "London", "Jakarta", "Yokohama"],
      header: "Your City Not Listed?",
      text: "If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.",
      button: "Message Us",
      isSmallScreen: false,
    };
  },
  components: {
    TheButton,
  },
  methods: {
    handleResize() {
      this.isSmallScreen = window.innerWidth < 768;
    },
  },
  mounted() {
    this.isSmallScreen = window.innerWidth < 768;
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
