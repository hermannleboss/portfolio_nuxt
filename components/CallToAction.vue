<template>
  <div
    class="d-flex flex-column flex-sm-row custom-container-fluid justify-content-between align-items-center cta"
  >
    <h2 class="m-0 cta--heading text-center text-md-left px-5 px-sm-2 pb-4">
      Interested in doing a project together?
    </h2>
    <div class="divider flex-grow-1 w-auto mx-4"></div>
    <ButtonItem variant="outline-secondary">Contact Me</ButtonItem>
  </div>
</template>

<script>
export default {
  name: 'CallToAction',
}
</script>

<style lang="scss" scoped>
.divider {
  border-top: 3px solid #bbb;
}

.cta {
  flex: 1 1 auto;
  padding-bottom: 80px;
  @media (min-width: 768px) {
    padding-bottom: 150px;
  }

  &--heading {
    @media (min-width: 768px) {
      width: 450px;
    }
  }
}
</style>
