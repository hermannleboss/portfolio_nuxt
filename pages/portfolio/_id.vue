<template>
  <div
    v-if='realisation!=undefined'>
    <div class='custom-container-fluid pb-5'>

      <div class='hero'>
        <img
          v-if='realisation.images!== undefined && realisation!=undefined'
          alt='image'
          class='img-full d-none d-xl-block'
          :src='realisation.images.image_hero'
        />
        <img
          alt='image'
          class='img-full d-none d-md-block d-xl-none'
          src='~/static/images/homepage/tablet/image-homepage-hero.jpg'
        />
        <img
          alt='image'
          class='img-full d-block d-md-none'
          src='~/static/images/homepage/mobile/image-homepage-hero.jpg'
        />
      </div>
    </div>

    <div
      class='custom-container-fluid presentation-spacing d-block d-md-flex m-0'
    >

      <!--
      <img :src="" alt='Profile image'
           class='img-full d-none d-md-block d-xl-none'/>
      <img :src="" alt='Profile image'
           class='img-full d-block d-md-none mx-auto'/>-->

      <div class='presentation-text align-items-stretch d-flex m-0 px-sm-5 pb-5'>
        <div class='border-top border-bottom align-items-stretch mt-4 mt-md-0'>
          <h1 class='pt-4 py-sm-5 pb-4 m-0'>{{ realisation.title }}</h1>
          <p>{{ realisation.shortDesc }}
          </p>
          <ButtonItem variant='outline-secondary' :to='"/portfolio/"+realisation.id'>VIEW PROJECT</ButtonItem>
          <div class='pt-5'></div>
        </div>
      </div>

      <div class='flex-1'>
        <h2>Project Bacground</h2>
        <p>{{ realisation.background }} le data</p>
        <h3 class='py-5'>Statics Preview</h3>

        <div
          v-if='realisation.images!== undefined && realisation!=undefined && realisation.images.image_preview!== undefined '>
          <!--
          <img
            alt='image'
            class='img-full d-none d-xl-block'
            v-for='image in realisation.images.image_preview' :key='image' :src='image'
          /> -->
        </div>
        <img
          v-if='realisation.images!=undefined'
          alt='image'
          class='img-full d-none d-xl-block pb-5'
          :src='realisation.images.image_preview[0]'
        />
        <img
          v-if='realisation.images!=undefined'
          alt='image'
          class='img-full d-none d-xl-block'
          :src='realisation.images.image_preview[1]'
        />
      </div>

    </div>

    <div class='custom-container-fluid py-5'>

      <div class='d-flex justify-content-between border-top border-bottom '>
        <div class='border-right  py-3 m-0 flex-grow-1'>
          <NuxtLink :to='"/portfolio/"+previousRealisation.id'  style='text-decoration: none'>
            <div v-if='previousRealisation.title!=undefined'>
              <h3>{{previousRealisation.title}}</h3>
              <p>Previous Project</p>
            </div>
          </NuxtLink>
        </div>
        <div class='py-3 m-0 flex-grow-1 text-right' :to='"/portfolio/"+nextRealisation.id'>
          <NuxtLink :to='"/portfolio/"+nextRealisation.id' style='text-decoration: none'>
            <div v-if='nextRealisation.title!=undefined'>

              <h3>{{nextRealisation.title}}</h3>
              <p>Next Project</p>
            </div>

          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PortfolioDetail',
  data() {
    return {
      realisation: {},
      nextRealisation: {},
      previousRealisation: {}
    }
  },
  created() {
    axios
      .get('http://localhost:3001/realisations/' + this.$route.params.id)
      .then(response => {
        this.realisation = response.data
        const nexId = this.realisation.id + 1
        const prevId = this.realisation.id - 1
        axios
          .get('http://localhost:3001/realisations/' + nexId)
          .then(response => {
            this.nextRealisation = response.data
          })
          .catch(error => {
            console.log('there was an error' + error.message)
          })
        axios
          .get('http://localhost:3001/realisations/' + prevId)
          .then(response => {
            this.previousRealisation = response.data
          })
          .catch(error => {
            console.log('there was an error' + error.message)
          })
      })
      .catch(error => {
        console.log('there was an error' + error.message)
      })
  }
}
</script>

<style scoped>

</style>
