<template>
  <div
    v-if="realisation!==undefined">
    <div class="custom-container-fluid pb-5">

      <div class="hero">
        <img
          alt="image"
          class="img-full"
          :src="realisation.heroImage.contentUrl"
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
          <ButtonItem desable variant="outline-secondary" :to='"/realisation/"+realisation.id'>VIEW PROJECT</ButtonItem>
          <div class="pt-5"></div>
        </div>
      </div>

      <div class="flex-1">
        <h2>Project Bacground</h2>
        <p>{{ realisation.description }}</p>
        <h3 class="py-5">Statics Preview</h3>

        <div
          v-if="realisation.images!== undefined && realisation!==undefined && realisation.images.image_preview!== undefined ">
          <!--
          <img
            alt='image'
            class='img-full d-none d-xl-block'
            v-for='image in realisation.images.image_preview' :key='image' :src='image'
          /> -->
        </div>
        <img
          v-for="image in realisation.previewImages"
          :key="image"
          :src="image.contentUrl"
          alt="image"
          class="img-full pb-5"
        />
      </div>

    </div>

    <div class="custom-container-fluid py-5">

      <div class="d-flex justify-content-between border-top border-bottom ">
        <div class="border-right  py-3 m-0 flex-grow-1">
          <NuxtLink
            v-if="previousRealisation!==undefined" :to='"/realisation/"+previousRealisation.id'
            style="text-decoration: none">
            <div v-if="previousRealisation.title!==undefined">
              <h3>{{ previousRealisation.title }}</h3>
              <p>Previous Project</p>
            </div>
          </NuxtLink>
        </div>
        <div class="py-3 m-0 flex-grow-1 text-right">
          <NuxtLink
            v-if="nextRealisation!==undefined" :to='"/realisation/"+nextRealisation.id'
            style="text-decoration: none">
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
import Manage from "static/images/portfolio/desktop/image-portfolio-manage.jpg";
import ManagePreview1 from "static/images/detail/desktop/image-manage-preview-1.jpg";
import ManagePreview2 from "static/images/detail/desktop/image-manage-preview-2.jpg";
import ManageHero from "static/images/detail/desktop/image-manage-hero.jpg";
import Bookmark from "static/images/portfolio/desktop/image-portfolio-bookmark.jpg";
import BookmarkPreview1 from "static/images/detail/desktop/image-bookmark-preview-1.jpg";
import BookmarkPreview2 from "static/images/detail/desktop/image-bookmark-preview-2.jpg";
import BookmarkHero from "static/images/detail/desktop/image-bookmark-hero.jpg";
import Fylo from "static/images/portfolio/desktop/image-portfolio-fylo.jpg";
import FyloPreview1 from "static/images/detail/desktop/image-fylo-preview-1.jpg";
import FyloPreview2 from "static/images/detail/desktop/image-fylo-preview-2.jpg";
import FyloHero from "static/images/detail/desktop/image-fylo-hero.jpg";
import Insure from "static/images/portfolio/desktop/image-portfolio-insure.jpg";
import InsurePreview1 from "static/images/detail/desktop/image-insure-preview-1.jpg";
import InsurePreview2 from "static/images/detail/desktop/image-insure-preview-2.jpg";
import InsureHero from "static/images/detail/desktop/image-insure-hero.jpg";

export default {
  name: "PortfolioDetail",
  data() {
    return {
      realisationsStatic: [
        {
          "@id": "/achievements/5",
          "@type": "Achievement",
          "id": 5,
          "title": "Manage",
          "description": "This project was a front-end  challenge from Frontend Mentor. It’s a platform that    enables you to practice building websites to a design and project brief. Each challenge    includes mobile and desktop designs to show how the website should look at different    screen sizes. Creating these projects has helped me refine my workflow and solve    real-world coding problems. I’ve learned something new with each project, helping    me to improve and adapt my style.",
          "shortDesc": "This project required me to build a fully responsive landing page to the designs provided. I    used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such    as the features section.",
          "link": "hermanneho.com",
          "portfolioImage": {
            "@id": "/media_objects/1",
            "@type": "http://schema.org/MediaObject",
            "contentUrl": Manage
          },
          "previewImages": [
            {
              "@id": "/media_objects/6",
              "@type": "http://schema.org/MediaObject",
              "contentUrl": ManagePreview1
            },
            {
              "@id": "/media_objects/7",
              "@type": "http://schema.org/MediaObject",
              "contentUrl": ManagePreview2
            }
          ],
          "heroImage": {
            "@id": "/media_objects/5",
            "@type": "http://schema.org/MediaObject",
            "contentUrl": ManageHero
          }
        },
        {
          "@id": "/achievements/6",
          "@type": "Achievement",
          "id": 6,
          "title": "Bookmark",
          "description": "This project was a front-end  challenge from Frontend Mentor. It’s a platform that    enables you to practice building websites to a design and project brief. Each challenge    includes mobile and desktop designs to show how the website should look at different    screen sizes. Creating these projects has helped me refine my workflow and solve    real-world coding problems. I’ve learned something new with each project, helping    me to improve and adapt my style.",
          "shortDesc": "This project required me to build a fully responsive landing page to the designs provided. I    used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such    as the features section.",
          "link": "hermanneho.com",
          "portfolioImage": {
            "@id": "/media_objects/4",
            "@type": "http://schema.org/MediaObject",
            "contentUrl": Bookmark
          },
          "previewImages": [
            {
              "@id": "/media_objects/6",
              "@type": "http://schema.org/MediaObject",
              "contentUrl": BookmarkPreview1
            },
            {
              "@id": "/media_objects/7",
              "@type": "http://schema.org/MediaObject",
              "contentUrl": BookmarkPreview2
            }
          ],
          "heroImage": {
            "@id": "/media_objects/5",
            "@type": "http://schema.org/MediaObject",
            "contentUrl": BookmarkHero
          }
        },
        {
          "@id": "/achievements/6",
          "@type": "Achievement",
          "id": 7,
          "title": "Fylo",
          "description": "This project was a front-end  challenge from Frontend Mentor. It’s a platform that    enables you to practice building websites to a design and project brief. Each challenge    includes mobile and desktop designs to show how the website should look at different    screen sizes. Creating these projects has helped me refine my workflow and solve    real-world coding problems. I’ve learned something new with each project, helping    me to improve and adapt my style.",
          "shortDesc": "This project required me to build a fully responsive landing page to the designs provided. I    used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such    as the features section.",
          "link": "hermanneho.com",
          "portfolioImage": {
            "@id": "/media_objects/4",
            "@type": "http://schema.org/MediaObject",
            "contentUrl": Fylo
          },
          "previewImages": [
            {
              "@id": "/media_objects/6",
              "@type": "http://schema.org/MediaObject",
              "contentUrl": FyloPreview1
            },
            {
              "@id": "/media_objects/7",
              "@type": "http://schema.org/MediaObject",
              "contentUrl": FyloPreview2
            }
          ],
          "heroImage": {
            "@id": "/media_objects/5",
            "@type": "http://schema.org/MediaObject",
            "contentUrl": FyloHero
          }
        },
        {
          "@id": "/achievements/6",
          "@type": "Achievement",
          "id": 8,
          "title": "Insure",
          "description": "This project was a front-end  challenge from Frontend Mentor. It’s a platform that    enables you to practice building websites to a design and project brief. Each challenge    includes mobile and desktop designs to show how the website should look at different    screen sizes. Creating these projects has helped me refine my workflow and solve    real-world coding problems. I’ve learned something new with each project, helping    me to improve and adapt my style.",
          "shortDesc": "This project required me to build a fully responsive landing page to the designs provided. I    used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such    as the features section.",
          "link": "hermanneho.com",
          "portfolioImage": {
            "@id": "/media_objects/4",
            "@type": "http://schema.org/MediaObject",
            "contentUrl": Insure
          },
          "previewImages": [
            {
              "@id": "/media_objects/6",
              "@type": "http://schema.org/MediaObject",
              "contentUrl": InsurePreview1
            },
            {
              "@id": "/media_objects/7",
              "@type": "http://schema.org/MediaObject",
              "contentUrl": InsurePreview2
            }
          ],
          "heroImage": {
            "@id": "/media_objects/5",
            "@type": "http://schema.org/MediaObject",
            "contentUrl": InsureHero
          }
        }
      ],
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
    this.realisation = this.realisationsStatic.find((realisation) => parseInt(realisation.id) === parseInt(this.$route.params.id));
    this.nextRealisation = this.realisationsStatic.find((realisation) => parseInt(realisation.id) === parseInt(this.$route.params.id) + 1);
    this.previousRealisation = this.realisationsStatic.find((realisation) => parseInt(realisation.id) === parseInt(this.$route.params.id) - 1);
    /* axios
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
      }); */
  }
};
</script>

<style scoped>

</style>
