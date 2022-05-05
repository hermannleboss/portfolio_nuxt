<template>
  <b-button squared variant="primary">
    <div class='btn-icon'>
      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9L9 13L17 9" stroke="#FFF"/>
        <path opacity="0.5" d="M1 5L9 9L17 5" stroke="#FFF"/>
        <path opacity="0.25" d="M1 1L9 5L17 1" stroke="#FFF"/>
      </svg>

    </div>
    <div class='btn-text'>
      <slot>About Me</slot>
    </div>
  </b-button>
</template>

<script>
export default {
  name: 'ButtonItem'
}
</script>

<style scoped lang='scss'>

$color-primary: #5FB4A2;
$color-secondary: #203A4C;
$color-dark:  #33323D;
$color-light:  #FAFAFA;
$color-light-gray:  #EAEAEB;
$color-red:  #F43030;

.btn{
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0;
  &-primary{
     background-color: $color-secondary;
   }
  &-icon{
    width: 48px;
    height: 48px;
    color: $color-primary ;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-text{
    padding: 17px;
  }
}
</style>
