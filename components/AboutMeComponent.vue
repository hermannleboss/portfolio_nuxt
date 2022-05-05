<template>
<div class='container-fluid d-flex py-150'>
  <img src='~/static/images/homepage/desktop/image-homepage-profile.jpg' alt='Profile image'>
  <div class='d-flex about-text px-125 flex-column'>
    <h2 class='border-top pt-5 pb-5'>About Me</h2>
    <p>I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
    <ButtonItem>GO TO PORTFOLIO</ButtonItem>
    <div class='border-bottom pt-5'></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AboutMeComponent',
  components: {}

}
</script>

<style scoped lang='scss'>
.about-text{
}
.py-150{
  padding-top: 150px;
  padding-bottom: 150px;
}

.px-125{
  padding-left: 125px;
  padding-right: 125px;
}
</style>
