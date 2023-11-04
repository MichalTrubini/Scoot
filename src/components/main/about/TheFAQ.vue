<template>
  <section class="mt-[145px] mb-[120px] px-8 md:mt-[120px] dt:px-[165px]">
    <h2 class="text-navy text-[32px] mb-12 md:text-[48px] md:mb-[64px] md:leading-none dt:text-center">{{ heading }}</h2>
    <div class="dt:flex justify-between">
      <h3 class="text-navy text-2xl mb-8 md:text-[40px]">{{subHeading1}}</h3>
      <Accordion :activeIndex="0">
        <AccordionTab
          v-for="(tab, index) in tabsOne"
          :key="index"
          :header="tab.title"
        >
          <p class="m-0">{{ tab.content }}</p>
        </AccordionTab>
      </Accordion>
    </div>
    <div class="mt-12 md:mt-[64px] dt:flex justify-between">
      <h3 class="text-navy text-2xl mb-8 md:text-[40px]">{{subHeading2}}</h3>
      <Accordion :activeIndex="0">
        <AccordionTab
          v-for="(tab, index) in tabsTwo"
          :key="index"
          :header="tab.title"
        >
          <p class="m-0">{{ tab.content }}</p>
        </AccordionTab>
      </Accordion>
    </div>
  </section>
</template>

<script lang="ts">
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

export default {
  name: "TheFAQ",
  data() {
    return {
      heading: "FAQs",
      subHeading1: "How it works",
      subHeading2: "Safe driving",
      tabsOne: [
        {
          title: "How do I download the app?",
          content:
            "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you'll be re-directed to the correct page.",
        },
        {
          title: "Can I find a nearby Scoots?",
          content:
            "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information.",
        },
        {
          title: "Do I need a license to ride?",
          content:
            "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.",
        },
      ],
      tabsTwo: [
        {
          title: "Should I wear a helmet?",
          content:
            " Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
        },
        {
          title: "How about the rules & regulations?",
          content:
            "  Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.",
        },
        {
          title: "What if I damage my Scoot?",
          content:
            "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter.",
        },
      ],
    };
  },
};
</script>

<style scoped>

.p-accordion {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
:deep(.p-accordion-header-link ) {
    background-color: #F2F5F9;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    font-family: "Space Mono", monospace;
    text-align: left;
    color: #495567;
    line-height: 1.5;
    font-size: 18px;
    padding: 2rem 0.875rem 2rem 2rem ;
}

:deep(.p-accordion-header-link > svg ) {
  filter: brightness(0) saturate(100%) invert(74%) sepia(89%) saturate(750%) hue-rotate(335deg) brightness(102%) contrast(98%);
}

:deep( .p-accordion-content ) {
    background-color: #F2F5F9;
    text-align: left;
    font-family: "Lexend Deca", sans-serif;
    color: #495567;
    padding: 0rem 1.5rem 2rem;
}

@media screen and (min-width: 768px) {
  :deep(.p-accordion ) {
    gap: 1.5rem;
}

:deep(.p-accordion-header-link ) {
    line-height: 1.5;
    font-size: 24px;
    padding: 2rem 1.5rem 2rem 2.5rem ;
}

:deep( .p-accordion-content ) {
    padding: 0rem 2rem 2rem 2.5rem;
}
}

@media screen and (min-width: 1440px) {
  :deep(.p-accordion ) {
   max-width: 730px;
   width: 100%;
}

}

</style>

