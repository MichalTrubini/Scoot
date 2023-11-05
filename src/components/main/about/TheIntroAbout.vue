<template>
  <div class="flex flex-col gap-[90px]">
  <Template
    :title="headerIntroduction1"
    :text="textIntroduction1"
    :show="show"
    :image="mobility"
    :customClass="customClass1"
    :flexFlow="`dt:flex-row-reverse dt:pl-[165px]`"
  ></Template>
  <Template
    :title="headerIntroduction2"
    :text="textIntroduction2"
    :show="show"
    :image="living"
    :customClass="customClass2"
    :flexFlow="`dt:flex-row dt:pr-[165px]`"
  ></Template>
</div>
</template>

<script lang="ts">
import mobility from "../../../assets/mobility.webp";
import living from "../../../assets/living.webp";
import Template from "../../shared/Template.vue";
export default {
  name: "TheIntroAbout",
  components: {
    Template,
  },
  data() {
    return {
      mobility: mobility,
      living: living,
      show: false,
      headerIntroduction1: "Mobility for the digital era",
      textIntroduction1:
        "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
      customClass1: "arrowTwo",
      headerIntroduction2: "Better urban living",
      textIntroduction2:
        "We're helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
      customClass2: "arrowThree",
      customLayout: "dt:flex-row dt:items-center dt:justify-between",
    };
  },
};
</script>

<style >
.arrowTwo {
  position: absolute;
  top: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  transform: rotateX(180deg);
  background: url("../../../assets/arrow4.svg") right 100% bottom 75% / 180%
    no-repeat;
}

@media screen and (min-width: 768px) {
  .arrowTwo {
    background: url("../../../assets/arrow4.svg") right 100% bottom 90% / 100%
        no-repeat,
      url("../../../assets/introCircle.svg") right 0% bottom 50% / 98px
        no-repeat;
  }
}

@media screen and (min-width: 1440px) {
  .arrowTwo {
    background: url("../../../assets/arrow4.svg") right 100% bottom 90% / 100%
        no-repeat,
      url("../../../assets/introCircle.svg") right -3% bottom 0% / 100px
        no-repeat;
  }
}

.arrowThree {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  background: url("../../../assets/arrow5.svg") left 0% bottom 100% / 90%
    no-repeat;
}

@media screen and (min-width: 768px) {
  .arrowThree {
    background: url("../../../assets/arrow5.svg") left 0% bottom 100% / 50%
        no-repeat,
      url("../../../assets/circleLeft.svg") left 0% bottom 50% / 98px
        no-repeat;
  }
}

@media screen and (min-width: 1440px) {
  .arrowThree {
    background: url("../../../assets/arrow5.svg") left -5% bottom 100% / 50%
        no-repeat,
      url("../../../assets/circleLeft.svg") left -3% bottom 0% / 100px
        no-repeat;
  }
}
</style>