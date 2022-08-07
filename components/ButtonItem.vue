<template>
  <b-button
    class="d-inline-flex align-items-center"
    squared
    :variant="variant"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span
      v-if="icon"
      class="btn-icon d-flex align-items-center justify-content-center"
    >
      <svg
        fill="none"
        height="14"
        viewBox="0 0 18 14"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 9L9 13L17 9" stroke="#FFF" />
        <path d="M1 5L9 9L17 5" opacity="0.5" stroke="#FFF" />
        <path d="M1 1L9 5L17 1" opacity="0.25" stroke="#FFF" />
      </svg>
    </span>
    <span class="btn-text">
      <slot>About Me</slot>
    </span>
  </b-button>
</template>

<script>
export default {
  name: 'ButtonItem',
  inheritAttrs: false,
  props: {
    variant: {
      type: [String],
      default: 'primary',
    },
    icon: Boolean,
    buttonClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  height: 48px;
  padding: 0;

  &-primary {
    background-color: $color-secondary;
    border: none;

    &:hover {
      background-color: $color-primary;
    }

    &:disabled {
      background-color: $color-light-gray;
      color: $color-primary;
    }
  }

  &-outline-secondary {
    &:hover {
      background-color: $color-dark;
    }
  }

  &-icon {
    background-color: #000;
    opacity: 0.1;
    width: 48px;
    height: 48px;
    color: $color-primary;
  }

  &-text {
    padding: 17px 50px;
  }
}
</style>
