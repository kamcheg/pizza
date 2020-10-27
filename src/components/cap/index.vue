<template>
  <div class="cap">
    <router-link to="/" class="cap__logo-block">
      <div class="cap__logo">
        <img :src="require('@/assets/img/logo.svg')" alt="logo">
      </div>
      <div class="cap__desc">
        <p class="cap__title">REACT PIZZA</p>
        <p class="cap__subtitle">самая вкусная пицца во вселенной</p>
      </div>
    </router-link>

    <div>
      <router-link to="/cart">
        <v-btn class="cap__btn">
          <template v-if="!totalQty">
            <span>Корзина пуста</span>
          </template>
          <template v-else>
            <div>
              <span>{{total}} ₽</span>
              <div class="line"></div>
              <span><i class="fas fa-shopping-cart"></i> {{totalQty}}</span>
            </div>
          </template>
        </v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import vBtn from '@/components/UI/primaryBtn'

export default {
  name: 'Cap',
  components: {
    vBtn
  },
  computed: mapGetters('cart', ['total', 'totalQty'])
}
</script>

<style lang="scss">
.cap {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo-block {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
  &__desc {
    margin-left: 17px;
  }
  &__title {
    font-size: 24px;
    font-weight: 900;
  }
  &__subtitle {
    color: #7B7B7B;
    font-size: 16px;
  }

  &__btn {
    padding: 12px 23px;
    font-size: 20px;

    & > div {
      display: flex;
      align-items: center;
    }

    .line {
      width: 1px;
      height: 25px;
      margin: 0 13px;
      background: #fff;
    }
  }
}
</style>