<template>
  <div class="portfolio custom-container-fluid">
    <PresentationCard v-for="(realisation, index) in getRealisations['hydra:member']" :key="realisation.id"
                      :presentation="extractPresentationType(realisation, index)" />
  </div>
</template>
<script lang="ts">

import { defaultPresentationType, PresentationType } from "@/models/interfaces";
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "PortfolioIndex",
  methods: {
    extractPresentationType(data: any, index: number): PresentationType {
      console.log(data);
      let presentation: PresentationType = { ...defaultPresentationType };
      presentation = {
        imageUrl: data["portfolioImage"]["fullPath"],
        title: data.title,
        shortDesc: data.shortDesc,
        url: "/realisation/" + index,
        reverse: index % 2 === 0
      };
      return presentation;
    },
    ...mapActions(["loadRealisations"])
  },
  computed: {
    ...mapGetters(["getRealisations"])
  },
  created() {
    this.loadRealisations();
  }
});
</script>

<style scoped>
.portfolio {
  display: grid;
  grid-template-columns: auto;
  grid-gap: 50px;
  padding-bottom: 150px;
}
</style>
