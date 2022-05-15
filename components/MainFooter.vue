<template>
  <div
    class='m-0 footer custom-container-fluid d-flex flex-column flex-sm-row justify-content-between bg-dark text-light
    footer-height footer-padding'>
    <div class="d-flex flex-column flex-sm-row  align-items-center m-0">
      <div href="#" class="">
        <svg viewBox="0 0 61 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer-logo">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M31.3469 26.1224L15.6735 0L0 26.1224H31.3469ZM60.0816 5.87755L44.4082 32L28.7347 5.87755H60.0816Z"
                fill="#FFF"/>
        </svg>
      </div>
      <ul class="m-0 p-0 py-4 pl-md-5 footer-link text-center">
        <li><a href="#">HOME</a></li>
        <li><a href="#">PORTFOLIO</a></li>
        <li><a href="#">CONTACT ME</a></li>
      </ul>
    </div>
    <div class="row align-items-center footer-icon m-0 justify-content-center">
      <BIconGithub/>
      <BIconTwitter/>
      <BIconLinkedin/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {BIconGithub, BIconLinkedin, BIconTwitter} from 'bootstrap-vue'

export default Vue.extend({
  name: "MainFooter",
  components: {
    BIconGithub, BIconTwitter, BIconLinkedin
  },
})
</script>

<style scoped lang="scss">

.footer {
  &-padding {
    @media (max-width: 576px) {
      padding-top: 56px;
      padding-bottom: 56px;
    }
  }

  &-height {
    min-height: 80px;
  }

  &-logo {
    width: 61px;
    height: 32px;
  }

  &-link {
    @media (min-width: 576px) {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 42px;
    }
  }

  &-icon {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 42px
  }
}

ul {
  list-style: none;
}

ul > li {
  text-decoration: none;
}

ul > li > a {
  display: block;
  color: white;
}

</style>
