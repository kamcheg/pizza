<template>
  <div class="product-cad-footer">
    <span class="product-cad-footer__price">{{price}} ₽</span>
    <div>
      <v-btn
        class="product-cad-footer__btn"
        @click="$emit('add-to-cart')"
        outline
      >
        <span>Добавить</span>
        <!-- <span v-if="counter" class="counter">{{counter}}</span> -->
      </v-btn>
    </div>
  </div>
</template>

<script>
import vBtn from '@/components/UI/primaryBtn'

export default {
  name: '',
  components: {
    vBtn
  },
  props: {
    price: Number
  }
}
</script>

<style lang="scss" scoped>
.product-cad-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__price {
    font-weight: bold;
    font-size: 22px;
  }

  &__btn {
    width: 125px;
    height: 40px;
    padding-left: 20px;
    display: inline-flex !important;
    align-items: center;

    &:hover {
      .counter {
        color: #FE5F1E;
        background: #fff;
      }
    }

    // .counter {
    //   display: inline-flex;
    //   align-items: center;
    //   justify-content: center;
    //   border-radius: 100px;
    //   background: #FE5F1E;
    //   color: #fff;
    //   width: 25px;
    //   height: 25px;
    //   font-size: 13px;
    //   margin-left: 10px;
    //   transition-duration: .2s;
    // }
  }
}
</style>