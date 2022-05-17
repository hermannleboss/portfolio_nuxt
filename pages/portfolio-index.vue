<template>
  <div style="
  display: grid;
  grid-template-columns: auto ;
  grid-gap: 50px;
">
    <HomeAboutMe/>
    <PresentationCard
      title="Manage"
    />
    <PresentationCard reverse
                      title="Bookmark"
    />
  </div>
</template>

<script>
export default {
  name: "portfolio-index"
}
</script>

<style scoped>

</style>
