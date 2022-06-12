<template>
  <div class="portfolio">
    <PresentationCard v-for="realisation in realisationsStatic" :key="realisation.id" :realisation="realisation" />
  </div>
</template>
<script>

import Manage from "@/static/images/portfolio/desktop/image-portfolio-manage.jpg";
import ManageHero from "@/static/images/detail/desktop/image-manage-hero.jpg";
import ManagePreview1 from "@/static/images/detail/desktop/image-manage-preview-1.jpg";
import ManagePreview2 from "@/static/images/detail/desktop/image-manage-preview-2.jpg";
import Bookmark from "@/static/images/portfolio/desktop/image-portfolio-bookmark.jpg";
import BookmarkHero from "@/static/images/detail/desktop/image-bookmark-hero.jpg";
import BookmarkPreview1 from "@/static/images/detail/desktop/image-bookmark-preview-1.jpg";
import BookmarkPreview2 from "@/static/images/detail/desktop/image-bookmark-preview-2.jpg";
import Fylo from "@/static/images/portfolio/desktop/image-portfolio-fylo.jpg";
import FyloHero from "@/static/images/detail/desktop/image-fylo-hero.jpg";
import FyloPreview1 from "@/static/images/detail/desktop/image-fylo-preview-1.jpg";
import FyloPreview2 from "@/static/images/detail/desktop/image-fylo-preview-2.jpg";
import Insure from "@/static/images/portfolio/desktop/image-portfolio-insure.jpg";
import InsureHero from "@/static/images/detail/desktop/image-insure-hero.jpg";
import InsurePreview1 from "@/static/images/detail/desktop/image-insure-preview-1.jpg";
import InsurePreview2 from "@/static/images/detail/desktop/image-insure-preview-2.jpg";
export default {
  name: "PortfolioIndex",
  data() {
    return {
      realisations: [],
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
          },
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
          },
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
          },
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
          },
        }
      ],
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
