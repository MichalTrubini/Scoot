<template>
<div class="py-[60px] relative md:py-[72px] md:pl-[97px]">
    <h2 class="relative z-10 text-white text-[40px] leading-8 md:text-left md:text-[56px]">{{title}}</h2>
    <img :src="pageImage" alt="line" class="absolute top-0 left-0 z-0 w-full h-[160px] object-cover md:h-[176px]"/>
    <img :src="circles" alt="circles" class="absolute top-1/2 translate-y-[-50%] right-0 hidden md:block"/>
</div>

</template>

<script lang="ts">
import circles from "../../assets/heroCircles.svg";

export default {
    name: "ThePageTitle",
    data() {
        return {
            circles: circles
        }
    },
    props: {
        title: String,
        pageImage: String
    }
}

</script>