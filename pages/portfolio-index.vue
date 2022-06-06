<template>
  <div class="portfolio">
    <PresentationCard v-for="realisation in realisations" :key="realisation.id" :realisation="realisation"/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PortfolioIndex',
  data() {
    return {
      realisations: []
    }
  },
  created() {
    axios
      .get('http://localhost:3001/realisations')
      .then(response => {
        this.realisations = response.data
      })
      .catch(error => {
        console.log('there was an error' + error.message)
      })
  }
}
</script>

<style scoped>
.portfolio {
  display: grid;
  grid-template-columns: auto;
  grid-gap: 50px;
  padding-bottom: 150px
}
</style>
