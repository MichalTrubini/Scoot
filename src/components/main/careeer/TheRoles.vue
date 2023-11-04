<template>
  <section
    class="flex flex-col gap-4 px-8 mt-[145px] mb-[120px] md:mt-[120px] md:px-10 dt:px-[165px] dt:mb-[160px]"
  >
    <div
      v-for="(role, index) in roles"
      :key="index"
      class="bg-snow px-8 pt-9 pb-8 md:flex items-center justify-between"
    >
      <div class="md:text-left">
        <h4 class="text-lg text-navy tracking-tight">{{ role.title }}</h4>
        <p class="mb-4 text-dimGrey md:m-0">{{ role.location }}</p>
      </div>
      <TheButton :button="button" :customClass="customButton" />
    </div>
  </section>
</template>

<script lang="ts">
import TheButton from "../../shared/TheButton.vue";

export default {
  name: "TheRoles",
  components: {
    TheButton,
  },
  data() {
    return {
      roles: [
        {
          title: "General Manager",
          location: "Jakarta, Indonesia",
        },
        {
          title: "UI/UX Designer",
          location: "Yokohama, Japan",
        },
        {
          title: "Blog Content Copywriter",
          location: "New York, United States",
        },
        {
          title: "Graphic Designer",
          location: "New York, United States",
        },
        {
          title: "Fleet Supervisor",
          location: "Jakarta, Indonesia",
        },
        {
          title: "UX Analyst",
          location: "London, United Kingdom",
        },
      ],
      button: "Apply",
      customButton: "customButton",
    };
  },
};
</script>

<style scoped>
.customButton {
    width: 100%;
}

@media screen and (min-width: 768px) {
    .customButton {
        width: 180px;
    }
}

</style>