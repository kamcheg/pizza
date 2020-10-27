<template>
  <div
    @click="$emit('click')"
    :class="{outline}"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PrimaryBtn',
  props: {
    outline: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  background: #FE5F1E;
  color: #fff;
  border-radius: 1000px;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  user-select: none;

  &.outline {
    color: #FE5F1E;
    background: transparent;
    border: 2px solid;
    transition-duration: .2s;

    &:hover {
      background: #FE5F1E;
      border-color: #FE5F1E;
      color: #fff;
    }
  }
}
</style>