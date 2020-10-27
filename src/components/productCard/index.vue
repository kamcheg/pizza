<template>
  <div class="product-card">
    <div class="product-card__img">
      <img :src="require('@/assets/img/' + productData.img)" alt="pizza-img">
    </div>
    <p class="product-card__name">{{productData.title}}</p>

    <v-seetings
      class="product-card__seetings"
      :productData="productData"
    />

    <productCardFooter
      class="product-card__footer"
      @add-to-cart="addToCart"
      :price="productData.price"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import vSeetings from './seetings'
import productCardFooter from './productCardFooter'

export default {
  name: 'Product',
  components: {
    vSeetings,
    productCardFooter,
  },
  props: {
    productData: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations('cart', ['addProductToCart']),
    addToCart() {
      this.addProductToCart(this.productData)
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  display: inline-block;
  width: 280px;

  &__img {
    width: 100%;

    img {
      display: block;
      width: 260px;
      margin-left: 15px;
    }
  }

  &__name {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    margin-top: 11px;
  }

  &__seetings {
    margin-top: 22px;
  }
   
  &__footer {
    margin-top: 17px;
  }
}
</style>