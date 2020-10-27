<template>
  <div class="main-layout">
    <div class="main-layout__wrapper">
      <vCap/>
      <div class="line"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import vCap from '../components/cap'

export default {
  name: 'MainLayout',
  components: {
    vCap
  }
}
</script>

<style lang="scss" scoped>
.main-layout {
  
  &__wrapper {
    width: 1340px;
    margin: 43px auto;
    background: #fff;
    padding: 49px 67px 96px;
    border-radius: 10px;

    .line {
      width: 100%;
      height: 1px;
      background: #F7F7F7;
      margin-top: 35px;
      margin-bottom: 40px;
    }
  }

}
</style>