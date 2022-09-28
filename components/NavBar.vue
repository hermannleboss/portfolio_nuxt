<template>
  <div>
    <b-navbar toggleable class="c-nav custom-container-fluid justify-content-between">
      <b-navbar-brand @click="$router.push('/')">
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

      <b-navbar-toggle target="navbar-toggle-collapse" class="d-flex d-sm-none">
        <template #default="{ expanded }">
          <svg
            v-if="expanded" width="18" height="19" viewBox="0 0 18 19" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd" clip-rule="evenodd"
              d="M9.00003 8.79286L0.868301 0.661133L0.161194 1.36824L8.29292 9.49997L0.161194 17.6317L0.868301 18.3388L9.00003 10.2071L17.1318 18.3388L17.8389 17.6317L9.70714 9.49997L17.8389 1.36824L17.1318 0.661133L9.00003 8.79286Z"
              fill="#33323D" />
          </svg>
          <svg v-else width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="1" fill="#33323D" />
            <rect y="6" width="24" height="1" fill="#33323D" />
            <rect y="12" width="24" height="1" fill="#33323D" />
          </svg>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" class="justify-content-end" is-nav>
        <b-navbar-nav class="align-items-end">
          <b-nav-item :active="$route.path === '/'" to="/">HOME</b-nav-item>
          <b-nav-item
            :active="$route.path.includes('/realisation')"
            to="/realisation"
          >PORTFOLIO
          </b-nav-item
          >
          <b-nav-item :active="$route.path === '/contact-page'" to="/contact-page"
          >CONTACT ME
          </b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>

      <b-nav class="d-none d-sm-flex">
        <b-nav-item :active="$route.path === '/'" to="/">HOME</b-nav-item>
        <b-nav-item
          :active="$route.path.includes('/realisation')"
          to="/realisation"
        >PORTFOLIO
        </b-nav-item>
        <b-nav-item :active="$route.path === '/contact-page'" to="/contact-page"
        >CONTACT ME
        </b-nav-item>
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
* {
  //border: solid;
}

.c-nav {
  padding-top: 32px;
  padding-bottom: 32px;
  font-family: 'Public Sans', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    padding-top: 60px;
    padding-bottom: 47px;
  }
  @media (min-width: 1200px) {
    padding-top: 60px;
    padding-bottom: 50px;
  }
}

.nav-logo {
  width: 61px;
  height: 32px;
}
</style>
