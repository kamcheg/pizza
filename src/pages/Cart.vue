<template>
  <div class="cart">
    <cart-empty v-if="!cart.length"/>
    <cart-filled v-else/>
    <popupWindow v-if="toOrderPopup"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import cartEmpty from '@/components/cartEmpty'
import cartFilled from '@/components/cartFilled'
import popupWindow from '@/components/popups/popupToOrder/index'

export default {
  name: 'Cart',
  components: {
    cartEmpty, cartFilled, popupWindow
  },
  computed: {
    ...mapGetters('cart', ['cart']),
    ...mapGetters('popups', ['toOrderPopup']),
  }
}
</script>

<style lang="scss">
.cart {
  
}
</style>