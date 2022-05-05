<template>
  <div class='hero container-fluid'>
    <img src='~/static/images/homepage/desktop/image-homepage-hero.jpg' alt='image' class='img-full'>
    <div>
      <h1>Hey, I’m Hermann EHO and I love building beautiful websites</h1>
      <ButtonItem/>
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

.hero {
  min-height: 600px;
  display: flex;
  flex-direction: column;
}
.img-full{
  width: 100%;
}
</style>
