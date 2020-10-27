<template>
  <div class="product-card">
    
    <v-detail
      :name="product_data.title"
      :img="product_data.img"
      :dough="product_data.selectedDough"
      :size="product_data.selectedSize"
    />
    
    <v-counter
      :quantity="product_data.quantity"
      :id="product_data.id"
    />
    
    <div class="product-card__price"><p>{{product_data.price * product_data.quantity}} ₽</p></div>
    <div class="product-card__delete" @click="deleteProductFromCart(product_data.id)"></div>
  </div>
</template>

<script>
import vDetail from './detail'
import vCounter from './counter'
import { createNamespacedHelpers } from 'vuex'

const {mapMutations} = createNamespacedHelpers('cart')

export default {
  name: 'cartProductCard',
  components: {
    vDetail, vCounter
  },
  props: {
    product_data: {
      type: Object,
      required: true
    }
  },
  methods: mapMutations(['deleteProductFromCart'])
}
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px #F4F4F4 solid;
  margin-top: 30px; // TEMP
  padding-top: 30px;

  &__price {
    font-weight: bold;
    font-size: 22px;
  }

  &__delete {
    width: 32px;
    height: 32px;
    background: url("~@/assets/img/delete.svg");
    background-size: cover;
    cursor: pointer;
    transition-duration: 300ms;
  }
}
</style>