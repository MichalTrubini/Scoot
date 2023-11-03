<template>
<div class="bg-navy py-[88px] px-8">
    <h3 class="text-white text-[32px] leading-8 mb-10">Sign up and Scoot off today</h3>
    <div class="flex gap-4 justify-center">
        <img :src="appleStore" alt="appleStore" class="inline-block w-[114px] h-10" />
        <img :src="googlePlay" alt="googlePlay" class="inline-block w-[130px] h-10" />
    </div>
</div>

</template>

<script lang="ts">

import appleStore from "../../assets/appleStore.png";
import googlePlay from "../../assets/playStore.png"; 

export default {
    data() {
        return {
            appleStore: appleStore,
            googlePlay: googlePlay
        };
    },
};

</script>