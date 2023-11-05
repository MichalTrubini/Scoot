<template>
  <div class="max-w-[1440px] m-auto overflow-hidden">
    <TheHeader />
    <main>
      <router-view v-slot="slotProps">
        <transition name="fade-button" mode="out-in">
          <component :is="slotProps.Component"></component> </transition
      ></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/footer/TheFooter.vue";
import { ref, onBeforeMount, onBeforeUnmount, provide } from "vue";
import { calculateIsSmallScreen } from "./functions/functions";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  setup() {
    const isSmallScreen = ref(calculateIsSmallScreen());

    const handleResize = () => {
      isSmallScreen.value = calculateIsSmallScreen();
    };

    onBeforeMount(() => {
      window.addEventListener("resize", handleResize);
      console.log(isSmallScreen.value)
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    provide("isSmallScreen", isSmallScreen);

    return {
      isSmallScreen,
    };
  },
};
</script>

<style>
body {
  font-family: "Lexend Deca", sans-serif;
  text-align: center;
}

h1,
h2,
h3,
h4 {
  font-family: "Space Mono", monospace;
}

p {
  font-size: 0.9375rem;
}

.router-link-active {
  color: #fcb72b;
}

@media screen and (min-width: 1440px) {
  body {
    text-align: left;
  }
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.1s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.1s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
</style>
