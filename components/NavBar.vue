<template>
<div>
  <b-nav class='c-nav container-fluid justify-content-between' style=''>
    <b-navbar-brand href="#">
      <svg width="61" height="32" viewBox="0 0 61 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3469 26.1224L15.6735 0L0 26.1224H31.3469ZM60.0816 5.87755L44.4082 32L28.7347 5.87755H60.0816Z" fill="#33323D"/>
      </svg>
    </b-navbar-brand>
    <b-nav>
      <b-nav-item active>HOME</b-nav-item>
      <b-nav-item>PORTFOLIO</b-nav-item>
      <b-nav-item>CONTACT ME</b-nav-item>
    </b-nav>
  </b-nav>
</div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped lang='scss'>
$color-primary: #5FB4A2;
$color-secondary: #203A4C;
$color-dark:  #33323D;
$color-light:  #FAFAFA;
$color-light-gray:  #EAEAEB;
$color-red:  #F43030;

.c-nav{
  padding-top: 65px;
  padding-bottom: 65px;
}
</style>
