<template>
  <div class="custom-container-fluid">
    <div class="row row-cols-1 row-cols-sm-2 border-top py-5 m-0">
      <div class="col p-0">
        <h2>Get in touch</h2>
      </div>
      <div class="col p-0 pb-3">
        <p class="m-0 pb-2">
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in London. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          get in touch using the form.
        </p>

        <div>
          <a href="https://github.com/hermannleboss"
            ><BIconGithub class="mr-4"
          /></a>
          <a href="https://twitter.com/hermanneho"
            ><BIconTwitter class="mr-4"
          /></a>
          <a href="https://www.linkedin.com/in/hermann-eho/"
            ><BIconLinkedin
          /></a>
        </div>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-sm-2 border-top m-0 py-5">
      <div class="col p-0 py-3">
        <h2>Contact Me</h2>
      </div>
      <div class="col p-0">
        <b-form>
          <b-form-group>
            <label for="name">Name</label>
            <b-form-input placeholder="Jane Appleseed" />
          </b-form-group>
          <b-form-group>
            <label for="Email">Email</label>
            <b-form-input placeholder="email@example.com" />
          </b-form-group>
          <b-form-group>
            <label for="name">Message</label>
            <b-form-textarea placeholder="How can I help ?" />
          </b-form-group>
          <ButtonItem>Send Message</ButtonItem>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BIconGithub, BIconLinkedin, BIconTwitter } from 'bootstrap-vue'

export default Vue.extend({
  name: 'ContactPage',
  components: {
    BIconGithub,
    BIconTwitter,
    BIconLinkedin,
  },
  layout: 'lightFooter',
})
</script>

<style scoped>
.form-control {
  border-radius: unset;
  height: 48px;
  background-color: rgba(151, 151, 151, 0.3);
  /*height: calc(1.5em + 0.75rem + 2px);*/
}
label {
  font-weight: 700;
  font-size: 13px;
  line-height: 30px;
  mix-blend-mode: normal;
  opacity: 0.8;
  color: #33323d;
}
textarea.form-control {
  border-radius: unset;
  height: 96px;
  background-color: rgba(151, 151, 151, 0.3);
  /*height: calc(1.5em + 0.75rem + 2px);*/
}
</style>
