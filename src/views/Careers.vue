<template>
    <ThePageTitle :title="title" :pageImage="pageImage"/>
    <CareerContent />

</template>

<script lang="ts">
import ThePageTitle from "../components/shared/ThePageTitle.vue";
import pageImage from "../assets/page2.webp";
import CareerContent from "../components/main/careeer/CareerContent.vue";

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
        CareerContent
    }
}

</script>