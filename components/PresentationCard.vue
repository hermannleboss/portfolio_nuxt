<template>
  <div
    :class="{ 'flex-row-reverse': realisation.id % 2=== 0 }"

    class='custom-container-fluid presentation-spacing d-block d-md-flex m-0'
  >
    <img
      fluid
      alt='Profile image'
      class='img-full d-none d-xl-block mx-auto card-image' :src='realisation.images.image_portfolio'/>
    <!--
    <img :src="" alt='Profile image'
         class='img-full d-none d-md-block d-xl-none'/>
    <img :src="" alt='Profile image'
         class='img-full d-block d-md-none mx-auto'/>-->

    <div class='presentation-text align-items-stretch d-flex m-0 px-sm-5'>
      <div class='border-top border-bottom align-items-stretch mt-4 mt-md-0'>
        <h2 class='pt-4 py-sm-5 pb-4 m-0'>{{ realisation.title }}</h2>
        <p>{{ realisation.shortDesc }}
        </p>
        <ButtonItem variant='outline-secondary' :to='"/portfolio/"+realisation.id'>VIEW PROJECT</ButtonItem>
        <div class='pt-5'></div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'PresentationCard',
  components: {},
  props: {
    reverse: Boolean,
    realisation: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {}
})
</script>

<style lang='scss' scoped>
.card {
  &-spacing {
    padding-top: 96px;
    padding-bottom: 115px;
  }

  &-text {
  }

  &-image {
    max-width: 540px;
    max-height: 500px;
  }
}
</style>
