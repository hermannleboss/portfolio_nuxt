<template>
  <div class='custom-container-fluid about-spacing d-block d-sm-flex m-0'>
    <div class="d-block">
      <b-img src='~/static/images/homepage/desktop/image-homepage-profile.jpg' fluid alt='Profile image'
             class='img-full d-none d-xl-block mx-auto'/>
      <b-img src='~/static/images/homepage/tablet/image-homepage-profile.jpg' alt='Profile image'
             class='img-full d-none d-md-block d-xl-none'/>
      <b-img src='~/static/images/homepage/mobile/image-homepage-profile.jpg' alt='Profile image'
             class='img-full d-block d-md-none mx-auto'/>
    </div>
    <div class='about-text align-items-stretch  d-flex m-0'>
      <div class='border-top border-bottom  align-items-stretch mt-4'>
        <h2 class=' pt-4 pb-4 m-0'>About Me</h2>
        <p>I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing
          accessible
          HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use
          React,
          but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and
          have
          experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether
          that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
        <ButtonItem variant='outline-secondary'>GO TO PORTFOLIO</ButtonItem>
        <div class='pt-5'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeAboutMe',
  components: {}

}
</script>

<style scoped lang='scss'>

.about {
  &-spacing {
    padding-top: 96px;
    padding-bottom: 115px;
  }
}

</style>
