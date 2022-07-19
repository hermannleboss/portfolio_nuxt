<template>
  <div
    :class="{ 'flex-row-reverse': presentation.reverse }"

    class="custom-container-fluid presentation-spacing d-block d-md-flex m-0"
  >
    <img
      alt="Profile image"
      class="img-full mx-auto card-image" :src="presentation.imageUrl" />

    <div class="presentation-text align-items-stretch d-flex m-0 px-sm-5">
      <div class="border-top border-bottom align-items-stretch mt-4 mt-md-0">
        <h2 class="pt-4 py-sm-5 pb-4 m-0">{{ presentation.title }}</h2>
        <p>{{ presentation.shortDesc }}
        </p>
        <ButtonItem variant="outline-secondary" :to='presentation.url'>VIEW PROJECT</ButtonItem>
        <div class="pt-5"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { PresentationType } from "~/models/interfaces";

export default Vue.extend({
  name: "PresentationCard",
  components: {},
  props: {
    realisation: {
      type: Object,
      default() {
        return {};
      }
    },
    presentation:{
      type: Object as PropType<PresentationType>,
      required: true
    }
  },
  data() {
    return {
      image: ""
    };
  },
  computed:{
    getPortfolioImage() {
      let path = "https://via.placeholder.com/540x500?text=540x500";
      if (this.realisation !== undefined && this.realisation.portfolioImage !== null && this.realisation.portfolioImage !== undefined && this.realisation.portfolioImage.contentUrl !== undefined) {
        path = "https://localhost" + this.realisation.portfolioImage.contentUrl;
      }
      return path;
    }
  },
  created() {
    this.fetchPicture();
  },
  methods: {
    async fetchPicture() {
      const url = "https://localhost" + this.realisation.portfolioImage;
      const picture = await this.$axios.$get(url);
      this.image = "https://localhost" + picture.contentUrl;
    },
  }
});
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
