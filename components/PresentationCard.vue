<template>
  <div
    :class="{ 'flex-row-reverse': reverse }"
    class="custom-container-fluid presentation-spacing d-block d-md-flex m-0"
  >
    <!--<img fluid alt='Profile image'
         class='img-full d-none d-xl-block mx-auto'/>
    <img :src="require(`~/assets/images/portfolio/tablet/${imgUrlTablet}.jpg`)" alt='Profile image'
         class='img-full d-none d-md-block d-xl-none'/>
    <img :src="require(`~/assets/images/portfolio/mobile/${imgUrlMobile}.jpg`)" alt='Profile image'
         class='img-full d-block d-md-none mx-auto'/>-->

    <div class="presentation-text align-items-stretch d-flex m-0 px-sm-5">
      <div class="border-top border-bottom align-items-stretch mt-4 mt-md-0">
        <h2 class="pt-4 py-sm-5 pb-4 m-0">Title</h2>
        <p>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <ButtonItem variant="outline-secondary">VIEW PROJECT</ButtonItem>
        <div class="pt-5"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PresentationCard',
  components: {},
  props: {
    reverse: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.card {
  &-spacing {
    padding-top: 96px;
    padding-bottom: 115px;
  }

  &-text {
  }
}
</style>
