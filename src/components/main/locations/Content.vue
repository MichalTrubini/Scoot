<template>
<div class="px-8 py-[72px]">
    <img :src="earthImage" alt="earth" class="w-full h-auto"/>
</div>
</template>

<script lang="ts">

import earthImage from "../../../assets/earth.webp";

export default {
    name: "Content",
    data() {
        return {
            earthImage: earthImage
        }
    },
    components: {
    }
}
</script>