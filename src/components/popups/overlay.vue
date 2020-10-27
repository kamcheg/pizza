<template>
  <div class="popup-wrap">
    <div class="popup-wrap__overlay">
      <div class="popup-wrap__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup-window'
}
</script>

<style lang="scss" scoped>
.popup-wrap {
  &__overlay {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.281);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}
</style>