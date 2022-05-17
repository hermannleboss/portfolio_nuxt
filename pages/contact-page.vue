<template>
  <div class="custom-container-fluid">
    <div class="row border-top py-5">
      <div class="col">
        <h2>Get in touch</h2>
      </div>
      <div class="col">
        <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and
          am open to a wide range of opportunities. My preference would be to find a position in a company in London.
          But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive
          person who will always approach each task with a sense of purpose and attention to detail. Please do feel free
          to check out my online profiles below and get in touch using the form.</p>

        <div class="">
          <BIconGithub class="mr-4"/>
          <BIconTwitter class="mr-4"/>
          <BIconLinkedin/>
        </div>
      </div>
    </div>

    <div class="row border-top py-5">
      <div class="col">
        <h2>Contact Me</h2>
      </div>
      <div class="col">
        <b-form>
          <b-form-group>
            <label for="name">Name</label>
            <b-form-input placeholder="Jane Appleseed"/>
          </b-form-group>

          <b-form-group>
            <label for="Email">Email</label>
            <b-form-input placeholder="email@example.com"/>
          </b-form-group>

          <b-form-group>
            <label for="name">Message</label>
            <b-form-textarea placeholder="How can I help ?"/>
          </b-form-group>
          <ButtonItem variant='primary'>Send Message</ButtonItem>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {BIconGithub, BIconLinkedin, BIconTwitter} from 'bootstrap-vue'

export default Vue.extend({
  name: "contact-page",
  components: {
    BIconGithub, BIconTwitter, BIconLinkedin
  },
})
</script>

<style scoped>
.icon{
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 15px;
}
</style>
