<template>
  <div>
    <HomeHero />
    <HomeAboutMe />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  transition: {
    name: 'page',
    mode: 'out-in'
  }
});
</script>

<style lang="scss"></style>
