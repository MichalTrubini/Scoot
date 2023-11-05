<template>
  <ul class="mt-10 mb-20 flex flex-col gap-4 text-dimGrey md:flex-row md:my-0 md:gap-8">
    <li @click="handleLiClick" class="hover:text-yellow"><router-link to="/about">About</router-link></li>
    <li @click="handleLiClick" class="hover:text-yellow"><router-link to="/location">Location</router-link></li>
    <li @click="handleLiClick" class="hover:text-yellow"><router-link to="/careers">Careers</router-link></li>
  </ul>
</template>

<script lang="ts">

export default {
  props: {
    mobileMenu: Boolean, // Add a prop to control mobile menu behavior
  },
  methods: {
    handleLiClick() {
      // Emit a signal to the parent only if mobileMenu is true
      if (this.mobileMenu) {
        this.$emit('li-clicked');
      }
    }
  }
};
</script>
