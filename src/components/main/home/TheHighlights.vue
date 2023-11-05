<template>
  <section class="flex flex-col gap-[120px] mb-[120px] dt:mb-[180px]">
    <div v-for="(highlight, index) in highlights" :key="index">
      <Template
        :title="highlight.title"
        :text="highlight.text"
        :show="show"
        :image="highlight.img"
        :buttonText="`Learn More`"
        :customClass="highlight.customClass"
        :flexFlow="highlight.flexFlow"
      ></Template>
    </div>
  </section>
</template>

<script lang="ts">
import highlight1 from "../../../assets/highlight1.webp";
import highlight2 from "../../../assets/highlight2.webp";
import highlight3 from "../../../assets/highlight3.webp";
import Template from "../../shared/Template.vue";

export default {
  name: "TheHighlights",
  components: {
    Template,
  },
  data() {
    return {
      show: true,
      highlights: [
        {
          title: "Easy to use riding telemetry",
          text: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
          img: highlight1,
          customClass: "arrowOne",
          flexFlow: "dt:flex-row-reverse dt:pl-[165px]",
        },
        {
          title: "Coming to a city near you",
          text: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
          img: highlight2,
          customClass: "arrowThree",
          flexFlow: "dt:flex-row dt:pr-[165px]",
        },
        {
          title: "Zero hassle payments",
          text: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
          img: highlight3,
          customClass: "arrowFour",
          flexFlow: "dt:flex-row-reverse dt:pl-[165px]",
        },
      ],
    };
  },
};
</script>

<style>
.arrowFour {
  position: absolute;
  top: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  background: url("../../../assets/arrow4.svg") right 170% bottom 75% / 160%
    no-repeat;
}

@media screen and (min-width: 768px) {
  .arrowFour {
    background: url("../../../assets/arrow6.svg") right 0% bottom 95% / 60%
        no-repeat,
      url("../../../assets/introCircle.svg") right 0% bottom 50% / 118px
        no-repeat;
  }
}

@media screen and (min-width: 1440px) {
  .arrowFour {
    background: url("../../../assets/arrow6.svg") right 0% bottom 95% / 50%
        no-repeat,
      url("../../../assets/introCircle.svg") right -3% bottom 50% / 100px no-repeat;
  }
}
</style>
