<template>
    <ThePageTitle :title="title" :pageImage="pageImage"/>
</template>

<script lang="ts">
import ThePageTitle from "../components/shared/ThePageTitle.vue";
import pageImage from "../assets/page2.webp";

export default {
    name: "Location",
    data() {
        return {
            title: "Careers",
            pageImage: pageImage
        }
    },
    components: {
        ThePageTitle,
    }
}

</script>