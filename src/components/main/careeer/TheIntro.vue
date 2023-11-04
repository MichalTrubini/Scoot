<template>
  <Template :headerIntroduction="headerIntroduction" :textIntroduction="textIntroduction" :button="button" :show="show" :imageOne="careerImage" :buttonText="button" :customClass="customClass"></Template>
</template>

<script lang="ts">
import careerImage from "../../../assets/career1.webp";
import TheButton from "../../shared/TheButton.vue";
import arrow from "../../../assets/arrow4.svg";
import Template from "../../shared/Template.vue";
export default {
  name: "CareerIntro",
  components: {
    TheButton,
    Template,
  },
  data() {
    return {
      careerImage: careerImage,
      arrow: arrow,
      headerIntroduction: "Care to join our mission?",
      textIntroduction:
        "We're always looking for ambitious individuals to help us on our journey. If you're passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",
      button: "Say Hello",
      show: true,
      customClass: "arrowTop",
    };
  },
};
</script>

<style >
.arrowOne {
  position: absolute;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: url("../../../assets/arrow4.svg") right 100% bottom 15% / 150%
    no-repeat;
}

@media screen and (min-width: 768px) {
  .arrowOne {
    background: url("../../../assets/arrow4.svg") right 100% bottom 0% / 100%
        no-repeat,
      url("../../../assets/introCircle.svg") right 0% bottom 50% / 118px
        no-repeat;
  }
}

@media screen and (min-width: 1440px) {
  .arrowOne {
    background: url("../../../assets/arrow4.svg") right 100% bottom 0% / 100%
        no-repeat,
      url("../../../assets/introCircle.svg") right -3% bottom 50% / 100px
        no-repeat;
  }
}
</style>
