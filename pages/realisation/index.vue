<template>
  <div class="portfolio">
    <PresentationCard v-for="realisation in realisations" :key="realisation.id" :realisation="realisation" />
  </div>
</template>
<script>
export default {
  name: "PortfolioIndex",
  data() {
    return {
      realisations: []
    };
  },
  created() {
    this.fetchAchievements();
  },
  methods: {
    async fetchAchievements() {
      const achievements = await this.$axios.$get("https://localhost/achievements");
      console.log("Fetch");
      this.realisations = achievements["hydra:member"];
    }
  }
};
</script>

<style scoped>
.portfolio {
  display: grid;
  grid-template-columns: auto;
  grid-gap: 50px;
  padding-bottom: 150px
}
</style>
