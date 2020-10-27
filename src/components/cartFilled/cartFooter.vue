<template>
  <div class="cart-filled-footer">
    <div class="cart-filled-footer__total"><p>Сумма заказа: <span>{{total}} ₽</span></p></div>
    <div>
      <v-btn
        class="cart-filled-footer__btn"
        @click="openPopup('toOrderPopup')"
      >Оплатить сейчас</v-btn>
    </div>
  </div>
</template>

<script>
import vBtn from '@/components/UI/primaryBtn'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'cartFooter',
  components: {
    vBtn
  },
  computed: {
    ...mapGetters('cart', ['total']),
  },
  methods: {
    ...mapMutations('popups', ['openPopup'])
  }
}
</script>

<style lang="scss" scoped>
.cart-filled-footer {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &__total {
    margin-top: 40px;
    font-size: 23px;

    span {
      color: #FE5F1E;
      font-weight: 700;
    }
  }

  &__btn {
    margin-top: 30px;
    padding: 15px 32px;
  }
}
</style>