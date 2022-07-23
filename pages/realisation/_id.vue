<template>
  <div
    v-if="realisation!==undefined">
    <div class="custom-container-fluid pb-5">

      <div class="hero">
        <img
          alt="image"
          class="img-full"
          :src="getHeroImage"
        />
      </div>
    </div>

    <div
      class="custom-container-fluid presentation-spacing d-block d-md-flex"
    >
      <div class="presentation-text align-items-stretch d-flex m-0 px-sm-5 pb-5">
        <div class="border-top border-bottom align-items-stretch mt-4 mt-md-0">
          <h1 class="py-sm-5 pb-lg-4 m-0">{{ getRealisationById.title }}</h1>
          <p>{{ getRealisationById.shortDesc }}
          </p>
          <ButtonItem desable variant="outline-secondary" :href="'https://'+getRealisationById.link">VIEW PROJECT</ButtonItem>
          <div class="pt-5"></div>
        </div>
      </div>

      <div class="flex-1">
        <h2>Project Bacground</h2>
        <p>{{ getRealisationById.description }}</p>
        <h3 class="py-5">Statics Preview</h3>

        <img
          v-for="image in getRealisationById.previewImages"
          :key="image"
          :src="image.fullPath"
          alt="image"
          class="img-full pb-5"
        />
      </div>

    </div>

    <div class="custom-container-fluid py-5">

      <div class="d-flex justify-content-between border-top border-bottom ">
        <div class="border-right  py-3 m-0 flex-grow-1">
          <NuxtLink
            v-if="getPreviousRealisationById!==undefined" :to='"/realisation/"+(parseInt($route.params.id)-1)'
            style="text-decoration: none;">
            <div v-if="getPreviousRealisationById.title!==undefined">
              <h3>{{ getPreviousRealisationById.title }}</h3>
              <p>Previous Project</p>
            </div>
          </NuxtLink>
        </div>
        <div class="py-3 m-0 flex-grow-1 text-right">
          <NuxtLink
            v-if="getNextRealisationById!==undefined" :to='"/realisation/"+(parseInt($route.params.id)+1)'
            style="text-decoration: none;">
            <div v-if="getNextRealisationById.title!==undefined">

              <h3>{{ getNextRealisationById.title }}</h3>
              <p>Next Project</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "PortfolioDetail",
  data() {
    return {
      realisation: {},
      nextRealisation: {},
      previousRealisation: {}
    };
  },
  computed: {
    ...mapGetters(["getRealisations"]),
    getRealisationById() {
      return this.getRealisations["hydra:member"] !== undefined ? this.getRealisations["hydra:member"][this.$route.params.id] : {};
    },
    getNextRealisationById() {
      return this.getRealisations["hydra:member"] !== undefined ? this.getRealisations["hydra:member"][parseInt(this.$route.params.id)+1] : {};
    },
    getPreviousRealisationById() {
      return this.getRealisations["hydra:member"] !== undefined ? this.getRealisations["hydra:member"][parseInt(this.$route.params.id)-1] : {};
    },
    // getPortfolioImage() {
    //   let path = "https://via.placeholder.com/540x500?text=540x500";
    //   if (this.realisation !== undefined && this.realisation.portfolioImage !== null && this.realisation.portfolioImage !== undefined && this.realisation.portfolioImage.contentUrl !== undefined) {
    //     path = "https://localhost" + this.realisation.portfolioImage.contentUrl;
    //   }
    //   return path;
    // },
    getHeroImage() {
      let path = "https://via.placeholder.com/1110x500?text=1110x500";
      if (this.getRealisationById !== undefined && this.getRealisationById.heroImage !== null && this.getRealisationById.heroImage !== undefined && this.getRealisationById.heroImage.fullPath !== undefined) {
        path = this.getRealisationById.heroImage.fullPath;
      }
      return path;
    },
    getPreviewImages() {
      let path = ["https://via.placeholder.com/635x400?text=540x500", "https://via.placeholder.com/635x400?text=540x500"];
      if (this.getRealisationById !== undefined && this.getRealisationById.previewImages !== null && this.getRealisationById.previewImages !== undefined) {
        const lenth = this.getRealisationById.previewImages.length;
        path = [];
        for (let i = 0; i < lenth && this.getRealisationById.previewImages[i].contentUrl !== undefined; i++) {
          path.push(this.getRealisationById.previewImages[i].fullPath);
        }
      }
      return path;
    }
  },
  methods: {
    ...mapActions(["loadRealisations"])
  },
  created() {
    this.loadRealisations().then(
      value => {
        console.log(value);
        console.log("finish waiting");
      }
    );
    // console.log(this.getRealisationById);
    // this.realisation = this.realisationsStatic.find((realisation) => parseInt(realisation.id) === parseInt(this.$route.params.id));
    // this.nextRealisation = this.realisationsStatic.find((realisation) => parseInt(realisation.id) === parseInt(this.$route.params.id) + 1);
    // this.previousRealisation = this.realisationsStatic.find((realisation) => parseInt(realisation.id) === parseInt(this.$route.params.id) - 1);
  }
});
</script>

<style scoped>
</style>
