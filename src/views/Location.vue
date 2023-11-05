<template>
    <div>
<ThePageTitle :title="title" :pageImage="pageImage"/>
<LocationsContent/>
</div>
</template>

<script lang="ts">
import ThePageTitle from "../components/shared/ThePageTitle.vue";
import pageImage from "../assets/page2.webp";
import LocationsContent from "../components/main/locations/LocationsContent.vue";

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
        LocationsContent
    }
}

</script>