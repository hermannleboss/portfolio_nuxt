<template>
  <div class='custom-container-fluid'>
    <div class='hero'>
      <img src='~/static/images/homepage/desktop/image-homepage-hero.jpg' alt='image'
           class='img-full d-none d-xl-block'>
      <img src='~/static/images/homepage/tablet/image-homepage-hero.jpg' alt='image'
           class='img-full d-none d-md-block d-xl-none'>
      <img src='~/static/images/homepage/mobile/image-homepage-hero.jpg' alt='image'
           class='img-full d-block d-md-none'>
      <div class='hero-text'>
        <h1 class='pb-4'>Hey, I’m EHO Hermann and I love building beautiful websites</h1>
        <ButtonItem/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderHero',
  components: {}
}
</script>

<style scoped lang='scss'>

$color-primary: #5FB4A2;
$color-secondary: #203A4C;
$color-dark: #33323D;
$color-light: #FAFAFA;
$color-light-gray: #EAEAEB;
$color-red: #F43030;
$color-white: #FFFFFF;

.hero {
  position: relative;

  &-text {
    background-color: $color-white;
    bottom: 0;
    left: 0;
    border: white solid 1px;
    padding-top: 55px;
    padding-right: 55px;

    @media (min-width: 768px) {
      position: absolute;
      width: 514px;
    }

    @media (min-width: 1200px) {
      width: 445px;
    }
  }
}

.img-full {
  width: 100%;
}
</style>
