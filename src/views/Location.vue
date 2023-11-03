<template>
    
<ThePageTitle :title="title" :pageImage="pageImage"/>
<Content/>

</template>

<script lang="ts">
import ThePageTitle from "../components/shared/ThePageTitle.vue";
import pageImage from "../assets/page2.webp";
import Content from "../components/main/locations/Content.vue";

export default {
    name: "Location",
    data() {
        return {
            title: "Locations",
            pageImage: pageImage
        }
    },
    components: {
        ThePageTitle,
        Content
    }
}

</script>