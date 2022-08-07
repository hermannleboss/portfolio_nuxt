<template id="#about">
  <div
    class="custom-container-fluid about about-spacing justify-content-start d-block d-md-flex"
  >
    <div class="about-image">
      <img
        alt="Profile image"
        class="img-full mx-auto"
        src="~/static/images/homepage/desktop/hermann-eho.jpg"
      />
    </div>
    <div
      class="about-text d-flex m-0 justify-content-between align-items-start"
    >
      <div
        class="flex-column align-items-start justify-content-between border-top border-bottom mt-4 mt-md-0 d-flex h-100"
      >
        <div>
          <h2 class="pt-3 py-sm-4 pb-4 m-0">About Me</h2>
          <p>
            I’m a junior Frontend developer with about 4 year of experience,
            looking for a new role in an exciting company. I focus on writing
            accessible HTML, using modern CSS practices and writing clean
            JavaScript. When writing JavaScript code, I mostly use React, but I
            can adapt to whatever tools are required. I have experience in
            different language and frameworks and all this can be useful. I’m
            based in Lomé, TOGO, but I’m happy working remotely and have
            experience in remote teams. When I’m not coding, you’ll find me
            watching manga. I’d love you to check out my work.
          </p>
        </div>
        <ButtonItem variant="outline-secondary" class="mb-5" to="/realisation"
          >GO TO PORTFOLIO</ButtonItem
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeAboutMe',
  components: {},
}
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
      height: 100%;
    }
  }

  &-spacing {
    padding-top: 150px;
    padding-bottom: 150px;
    @media (min-width: 1200px) {
      //height: 811px; //600 + 96+ 115
    }
  }

  &-text {
    @media (min-width: 768px) {
      & > div {
        width: 400px;
      }
      min-height: 600px;
      padding-left: 125px;
    }
    @media (min-width: 1200px) {
    }
  }
}
</style>
