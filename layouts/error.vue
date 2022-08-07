<template>
  <did>
    <div class="title">{{ message }}</div>
    <p v-if="statusCode === 404">
      <nuxt-link to="/">Return To Homepage</nuxt-link>
    </p>
  </did>
</template>

<script>
export default {
  name: 'DefaultError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: this.message,
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    },
  },
}
</script>

<style scoped></style>
