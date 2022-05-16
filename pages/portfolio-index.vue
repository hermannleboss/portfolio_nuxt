<template>
  <div style="
  display: grid;
  grid-template-columns: auto ;
  grid-gap: 50px;
">
    <HomeAboutMe/>
    <PresentationCard
      img-url-desktop="../static/images/portfolio/desktop/image-portfolio-manage.jpg"
      img-url-tablet="image-portfolio-manage"
      img-url-mobile="image-portfolio-manage"
      title="Manage"
    />
    <PresentationCard reverse
                      title="Bookmark"
    />
  </div>
</template>

<script>
export default {
  name: "portfolio-index"
}
</script>

<style scoped>

</style>
