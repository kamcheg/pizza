<template>
  <popupWindow>
    
    <div class="popup-to-order">
      <p class="popup-to-order__title">Заполните форму для оформления заказа</p>
      <form action="" @submit.prevent="submitForm">
        <input type="text" placeholder="Ваше имя" required>
        <input type="text" placeholder="Ваш номер" required>
        <input type="text" placeholder="Ваш адрес" required>
        <button
          type="submit"
          class="popup-to-order__btn"
        >Заказать</button>
      </form>
    </div>

  </popupWindow>
</template>

<script>
import popupWindow from '@/components/popups/overlay'
import { mapMutations } from 'vuex'

export default {
  name: 'popup-to-order',
  components: {
    popupWindow
  },
  methods: {
    ...mapMutations('popups', ['closePopup']),
    ...mapMutations('cart', ['resetCart']),
    
    submitForm() {
      this.$router.push('/')
      this.closePopup('toOrderPopup')
      this.resetCart()

      setTimeout(() => {
        alert('Ваш заказ успешно отправлен!')
      }, 200);
    }
  }
}
</script>

<style lang="scss">
.popup-to-order {
  padding: 40px;
  background: #fff;
  border-radius: 10px;

  &__title {
    font-size: 20px;
    width: 300px;
    text-align: center;
    margin-bottom: 30px;
  }

  input {
    display: block;
    border: none;
    outline: none;
    box-shadow: inset 1px 1px 2px 1px #ccc;
    margin-bottom: 10px;
    width: 300px;
    height: 60px;
    border-radius: 7px;
    padding-left: 30px;
  }

  &__btn-wrap {
    display: flex;
    justify-content: center;
  }
  &__btn {
    padding: 20px 70px;
    display: inline-block;
    border: none;
    cursor: pointer;
    outline: none;
    background: #FE5F1E;
    color: #fff;
    user-select: none;
    font-weight: 700;
    border-radius: 1000px;
  }
}
</style>