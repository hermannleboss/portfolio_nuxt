<template>
  <div class='container-fluid'>
    <div class='hero'>
      <img src='~/static/images/homepage/desktop/image-homepage-hero.jpg' alt='image' class='img-full'>
      <div class='hero-text'>
        <h1 class='pb-4'>Hey, I’m  EHO Hermann and I love building beautiful websites</h1>
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
$color-dark:  #33323D;
$color-light:  #FAFAFA;
$color-light-gray:  #EAEAEB;
$color-red:  #F43030;
$color-white: #FFFFFF;

.hero {
  position: relative;
  min-height: 600px;
  &-text{
    background-color: $color-white;
    width: 445px;
    position: absolute;
    bottom: 0;
    left: 0;
    border: white 100px;
    padding-top: 55px;
    padding-right: 55px;
  }
}
.img-full{
  width: 100%;
}
</style>
