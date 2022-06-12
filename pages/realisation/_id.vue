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
      class="custom-container-fluid presentation-spacing d-block d-md-flex m-0"
    >

      <!--
      <img :src="" alt='Profile image'
           class='img-full d-none d-md-block d-xl-none'/>
      <img :src="" alt='Profile image'
           class='img-full d-block d-md-none mx-auto'/>-->

      <div class="presentation-text align-items-stretch d-flex m-0 px-sm-5 pb-5">
        <div class="border-top border-bottom align-items-stretch mt-4 mt-md-0">
          <h1 class="py-sm-5 pb-lg-4 m-0">{{ realisation.title }}</h1>
          <p>{{ realisation.shortDesc }}
          </p>
          <ButtonItem desable variant="outline-secondary" :to='"/portfolio/"+realisation.id'>VIEW PROJECT</ButtonItem>
          <div class="pt-5"></div>
        </div>
      </div>

      <div class="flex-1">
        <h2>Project Bacground</h2>
        <p>{{ realisation.description }}</p>
        <h3 class="py-5">Statics Preview</h3>

        <div
          v-if="realisation.images!== undefined && realisation!=undefined && realisation.images.image_preview!== undefined ">
          <!--
          <img
            alt='image'
            class='img-full d-none d-xl-block'
            v-for='image in realisation.images.image_preview' :key='image' :src='image'
          /> -->
        </div>
        <img
          v-for="image in getPreviewImages"
          :key="image"
          :src="image"
          alt="image"
          class="img-full pb-5"
        />
      </div>

    </div>

    <div class="custom-container-fluid py-5">

      <div class="d-flex justify-content-between border-top border-bottom ">
        <div class="border-right  py-3 m-0 flex-grow-1">
          <NuxtLink :to='"/realisation/"+previousRealisation.id' style="text-decoration: none">
            <div v-if="previousRealisation.title!==undefined">
              <h3>{{ previousRealisation.title }}</h3>
              <p>Previous Project</p>
            </div>
          </NuxtLink>
        </div>
        <div class="py-3 m-0 flex-grow-1 text-right" :to='"/realisation/"+nextRealisation.id'>
          <NuxtLink :to='"/realisation/"+nextRealisation.id' style="text-decoration: none">
            <div v-if="nextRealisation.title!==undefined">

              <h3>{{ nextRealisation.title }}</h3>
              <p>Next Project</p>
            </div>

          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PortfolioDetail",
  data() {
    return {
      realisation: {},
      nextRealisation: {},
      previousRealisation: {}
    };
  },
  computed: {
    getPortfolioImage() {
      let path = "https://via.placeholder.com/540x500?text=540x500";
      if (this.realisation !== undefined && this.realisation.portfolioImage !== null && this.realisation.portfolioImage !== undefined && this.realisation.portfolioImage.contentUrl !== undefined) {
        path = "https://localhost" + this.realisation.portfolioImage.contentUrl;
      }
      return path;
    },
    getHeroImage() {
      let path = "https://via.placeholder.com/1110x500?text=1110x500";
      if (this.realisation !== undefined && this.realisation.heroImage !== null && this.realisation.heroImage !== undefined && this.realisation.heroImage.contentUrl !== undefined) {
        path = "https://localhost" + this.realisation.heroImage.contentUrl;
      }
      return path;
    },
    getPreviewImages() {
      let path = ["https://via.placeholder.com/635x400?text=540x500", "https://via.placeholder.com/635x400?text=540x500"];
      if (this.realisation !== undefined && this.realisation.previewImages !== null && this.realisation.previewImages !== undefined) {
        const lenth = this.realisation.previewImages.length;
        path = [];
        for (let i = 0; i < lenth && this.realisation.previewImages[i].contentUrl !== undefined; i++) {
          path.push("https://localhost" + this.realisation.previewImages[i].contentUrl);
        }
      }
      return path;
    }
  },
  created() {
    axios
      .get("https://localhost/achievements/" + this.$route.params.id)
      .then(response => {
        this.realisation = response.data;
        const nexId = this.realisation.id + 1;
        const prevId = this.realisation.id - 1;
        axios
          .get("https://localhost/achievements/" + nexId)
          .then(response => {
            this.nextRealisation = response.data;
            console.log("next");
          })
          .catch(error => {
            console.log("there was an error" + error.message);
          });
        axios
          .get("https://localhost/achievements/" + prevId)
          .then(response => {
            this.previousRealisation = response.data;
            console.log("prev");
          })
          .catch(error => {
            console.log("there was an error" + error.message);
          });
      })
      .catch(error => {
        console.log("there was an error" + error.message);
      });
  }
};
</script>

<style scoped>

</style>
