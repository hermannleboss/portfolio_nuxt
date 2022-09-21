<template>
  <div
    :class="{ 'flex-row-reverse': presentation.reverse }"
    class="custom-container-fluid presentation-spacing d-block d-md-flex m-0"
  >
    <img
      alt="Profile image"
      class="img-full mx-auto card-image"
      :src="presentation.imageUrl"
    />

    <div class="presentation-text align-items-stretch d-flex m-0 px-sm-5">
      <div class="border-top border-bottom align-items-stretch mt-4 mt-md-0">
        <h2 class="pt-4 py-sm-5 pb-4 m-0">{{ presentation.title }}</h2>
        <p>{{ presentation.shortDesc }}</p>
        <ButtonItem variant="outline-secondary" :to="presentation.url"
          >VIEW PROJECT</ButtonItem
        >
        <div class="pt-5"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PresentationCard',
  components: {},
  props: {
    presentation: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
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
