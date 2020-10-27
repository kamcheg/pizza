<template>
  <div class="cart-filled">
    <div class="cart-filled__container">

      <cart-header/>

      <div class="cart-filled__body">
        <product-card
          v-for="product of cart"
          :key="product.id"
          :product_data="product"
        />
      </div>

      <cartFooter/>

    </div>
  </div>
</template>

<script>
import productCard from './cartProductCard'
import cartHeader from './cartHeader'
import cartFooter from './cartFooter'
import {createNamespacedHelpers} from 'vuex'

const {mapGetters} = createNamespacedHelpers('cart')

export default {
  name: 'cartFilled',
  components: {
    productCard, cartHeader, cartFooter
  },
  computed: mapGetters(['cart'])
}
</script>

<style lang="scss" scoped>
.cart-filled-filled {
  &__container {
    width: 827px;
    margin: 0 auto;
  }
}
</style>