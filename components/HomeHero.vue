<template>
  <div class="custom-container-fluid">
    <div class="hero">
      <img
        alt="image"
        class="img-full d-none d-xl-block"
        src="~/static/images/homepage/desktop/image-homepage-hero.jpg"
      />
      <img
        alt="image"
        class="img-full d-none d-md-block d-xl-none"
        src="~/static/images/homepage/tablet/image-homepage-hero.jpg"
      />
      <img
        alt="image"
        class="img-full d-block d-md-none"
        src="~/static/images/homepage/mobile/image-homepage-hero.jpg"
      />
      <div class="hero-text">
        <h1 class="pb-4">
          Hey, I’m EHO Hermann and I love building beautiful websites
        </h1>
        <ButtonItem icon/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHero',
  components: {},
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;

  &-text {
    background-color: $color-white;
    bottom: 0;
    left: 0;
    border: white solid 1px;

    @media (min-width: 576px) {
      position: absolute;
      padding-top: 55px;
      padding-right: 55px;
      width: 514px;
    }

    @media (min-width: 1200px) {
      width: 445px;
    }
  }
}
</style>
