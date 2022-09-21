<template>
  <div class="portfolio custom-container-fluid">
    <PresentationCard
      v-for="(realisation, index) in getRealisations['hydra:member']"
      :key="realisation.id"
      :presentation="extractPresentationType(realisation, index)"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { defaultPresentationType, PresentationType } from "@/models/interfaces";

export default defineComponent({
  name: "PortfolioIndex",
  computed: {
    ...mapGetters(["getRealisations"])
  },
  created() {
    this.loadRealisations();
  },
  methods: {
    extractPresentationType(data: any, index: number): PresentationType {
      let presentation: PresentationType = { ...defaultPresentationType };
      if (data.portfolioImage !== undefined)
        presentation = {
          imageUrl: data.portfolioImage.fullPath,
          title: data.title,
          shortDesc: data.shortDesc,
          url: "/realisation/" + index,
          reverse: index % 2 === 0
        };
      return presentation;
    },
    ...mapActions(["loadRealisations"])
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
