<template>
  <div class="product-card-counter">
    <div class="product-card-counter__change" @click="changeQty({id, num: -1})">-</div>
    <p class="product-card-counter__txt">{{quantity}}</p>
    <div class="product-card-counter__change" @click="changeQty({id, num: 1})">+</div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapMutations} = createNamespacedHelpers('cart')

export default {
  name: 'Counter',
  props: {
    quantity: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: mapMutations(['changeQty'])
}
</script>

<style lang="scss" scoped>
.product-card-counter {
  display: flex;
  align-items: center;

  &__change {
    color: #FE5F1E;
    width: 32px;
    height: 32px;
    border: 2px solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;
    cursor: pointer;
    transition-duration: .2s;
    user-select: none;

    &:hover {
      background: #FE5F1E;
      color: #fff;
      border-color: #FE5F1E;
    }
  }

  &__txt {
    margin: 0 10px
  }
}
</style>