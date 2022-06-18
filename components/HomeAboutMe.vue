<template>
  <div class="custom-container-fluid about about-spacing justify-content-between d-block d-md-flex m-0">
    <div class="about-image">

      <img
        alt="Profile image"
        class="img-full d-none d-xl-block mx-auto"
        src="~/static/images/homepage/desktop/image-homepage-profile.jpg"
      />
      <img
        alt="Profile image"
        class="img-full d-none d-md-block d-xl-none"
        src="~/static/images/homepage/tablet/image-homepage-profile.jpg"
      />
      <img
        alt="Profile image"
        class="img-full d-block d-md-none mx-auto"
        src="~/static/images/homepage/mobile/image-homepage-profile.jpg"
      />
    </div>
    <div class="about-text d-flex m-0 px-sm-5 pr-md-0 justify-content-between align-items-start">
      <div class="flex-column align-items-start border-top border-bottom mt-4 mt-md-0 d-flex h-100">
        <h2 class="pt-4 py-sm-5 pb-4 m-0">About Me</h2>
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
        <ButtonItem variant="outline-secondary" class="mb-5">GO TO PORTFOLIO</ButtonItem>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeAboutMe",
  components: {}
};
</script>

<style lang="scss" scoped>
img {
  @media (min-width: 768px) {
    height: 600px;
    object-fit: cover;
  }
}

.about {
  &-image {
    @media (min-width: 768px) {
      height: 600px;
      flex-grow: 1;
    }
  }

  &-spacing {
    padding-top: 96px;
    padding-bottom: 115px;
    @media (min-width: 1200px) {
      //height: 811px; //600 + 96+ 115
    }
  }

  &-text {
    @media (min-width: 768px) {
      min-height: 600px;
      width: 400px;
    }
    @media (min-width: 1200px) {
    }
    /*
    flex-grow: 0;
    flex-shrink: 0;*/
  }
}
</style>
