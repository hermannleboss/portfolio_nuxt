<template>
  <b-button squared :variant='variant' class='d-flex align-items-center'>
    <div
      v-if='icon'
      class='btn-icon d-flex align-items-center justify-content-center'>
      <svg
        width='18'
        height='14'
        viewBox='0 0 18 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M1 9L9 13L17 9' stroke='#FFF' />
        <path opacity='0.5' d='M1 5L9 9L17 5' stroke='#FFF' />
        <path opacity='0.25' d='M1 1L9 5L17 1' stroke='#FFF' />
      </svg>
    </div>
    <div class='btn-text'>
      <slot>About Me</slot>
    </div>
  </b-button>
</template>

<script>
export default {
  name:         'ButtonItem',
  inheritAttrs: false,
  props:        {
    variant: {
      type:    [String],
      default: 'primary'
    },
    icon: Boolean
  }
}
</script>

<style scoped lang='scss'>
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
  &-outline-secondary{
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
    padding: 17px 50px ;
  }
}
</style>
