<template>
  <div>
    <b-navbar class="c-nav custom-container-fluid justify-content-between">
      <b-navbar-brand href="#">
        <svg
          class="nav-logo"
          fill="none"
          viewBox="0 0 61 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M31.3469 26.1224L15.6735 0L0 26.1224H31.3469ZM60.0816 5.87755L44.4082 32L28.7347 5.87755H60.0816Z"
            fill="#33323D"
            fill-rule="evenodd"
          />
        </svg>
      </b-navbar-brand>
      <b-nav class="d-none d-sm-flex">
        <b-nav-item :active="$route.path==='/'" to="/">HOME</b-nav-item>
        <b-nav-item :active="$route.path.includes('/realisation')" to="/realisation">PORTFOLIO</b-nav-item>
        <b-nav-item :active="$route.path==='/contact-page'" to="/contact-page">CONTACT ME</b-nav-item>
      </b-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {}
};
</script>

<style lang="scss" scoped>
.c-nav {
  padding-top: 32px;
  padding-bottom: 32px;
  @media (min-width: 768px) {
    padding-top: 64px;
    padding-bottom: 47px;
  }
  @media (min-width: 1200px) {
    padding-top: 64px;
    padding-bottom: 54px;
  }
}

.nav-logo {
  width: 61px;
  height: 32px;
}
</style>
