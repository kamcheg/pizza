<template>
  <div class="cart-filled-header">
    <p class="cart-filled-header__title">Корзина</p>
    <p class="cart-filled-header__clear" @click="clearCart">Очистить корзину</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const {mapMutations} = createNamespacedHelpers('cart')

export default {
  name: 'cart-header',
  methods: mapMutations(['clearCart'])
}
</script>

<style lang="scss" scoped>
.cart-filled-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    font-weight: bold;
    font-size: 32px;
  }

  &__clear {
    font-size: 16px;
    color: #B6B6B6;
    cursor: pointer;
  }
}
</style>