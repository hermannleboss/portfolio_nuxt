<template>
  <div>
    <NavBar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style lang='scss'>
$color-primary: #5FB4A2;
$color-secondary: #203A4C;
$color-dark:  #33323D;
$color-light:  #FAFAFA;
$color-light-gray:  #EAEAEB;
$color-red:  #F43030;
body{
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  /* or 188% */
  color:$color-dark;
}
h1{
  font-family: 'Ibarra Real Nova';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;
  /* or 100% */
  letter-spacing: -0.446429px;
  color: $color-dark;
}

h2{
  font-family: 'Ibarra Real Nova';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
  /* or 105% */

  letter-spacing: -0.357143px;
  color: $color-dark;
}

h3{
  font-family: 'Ibarra Real Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 36px;
  /* or 112% */
  letter-spacing: -0.285714px;
}

a{
  color: $color-dark;
}
.active{

  color: $color-primary;
}
</style>
