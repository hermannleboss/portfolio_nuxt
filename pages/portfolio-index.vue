<template>
  <div style="display: grid; grid-template-columns: auto; grid-gap: 50px">
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
      .get('http://localhost:3000/realisations')
      .then(response => {
        this.realisations = response.data
      })
      .catch(error => {
        console.log('there was an error' + error.message)
      })
  }
}
</script>

<style scoped></style>
