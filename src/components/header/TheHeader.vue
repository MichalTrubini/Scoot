<template>
  <header
    class="py-[22px] px-8 md:px-10 dt:px-[165px] bg-white fixed z-30 w-full"
  >
    <div v-if="isSmallScreen" class="grid">
      <img
        :src="burger"
        alt="burger"
        class="w-[20px] h-[16px] absolute top-6"
        @click="toggleMobileMenu"
      />
      <router-link to="/" class="justify-self-center">
        <img :src="logo" alt="Vue logo" class="w-[75px] h-[20px] "
      /></router-link>
    </div>
    <div v-else class="flex items-center justify-between">
      <div class="flex gap-[60px] items-center">
        <router-link to="/"
          ><img :src="logo" alt="Vue logo" class="w-[75px] h-[20px] relative top-[-3px]"
        /></router-link>
        <TheNavigation />
      </div>
      <TheButton :button="button" />
    </div>
    <teleport to="body">
      <transition name="slide-fade" mode="out-in">
        <div
          v-if="showMobileMenu"
          class="fixed z-20 top-0 bg-darkGrey px-8 pt-[128px] pb-6 flex flex-col justify-between mobileMenu w-[256px]"
          :style="{ height: screenHeight + 'px' }"
        >
          <TheNavigation :mobile-menu="true" @li-clicked="toggleMobileMenu" />
          <TheButton
            :button="button"
            :mobile-menu="true"
            @li-clicked="toggleMobileMenu"
          />
        </div>
      </transition>
      <transition name="fade">
        <div
          v-if="showMobileMenu"
          class="fixed z-[19] top-0 left-0 right-0 bottom-0 bg-black opacity-80"
          @click="toggleMobileMenu"
        ></div>
      </transition>
    </teleport>
  </header>
</template>

<script lang="ts">
import logo from "../../assets/logo-black.svg";
import burger from "../../assets/burger.svg";
import TheNavigation from "../shared/TheNavigation.vue";
import TheButton from "../shared/TheButton.vue";
import { inject } from "vue";
export default {
  name: "TheHeader",
  data() {
    return {
      logo: logo,
      burger: burger,
      isSmallScreen: inject("isSmallScreen"),
      screenHeight: inject("screenHeight"),
      button: "Get Scootin",
      showMobileMenu: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
  components: { TheNavigation, TheButton },
};
</script>

<style>
.mobileMenu ul li {
  color: #e5ecf4;
  text-align: left;
  font-size: 18px;
}

.slide-fade-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .2s ease;
}

.slide-fade-enter-to {
  transform: translateX(0%);
  opacity: 1;
}

.slide-fade-leave-from {
  transform: translateX(0%);
  opacity: 1;
}

.slide-fade-leave-active {
  transition: all .2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
