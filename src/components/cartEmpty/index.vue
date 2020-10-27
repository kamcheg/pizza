<template>
  <div class="cart-empty">
    <p class="cart-empty__title">Корзина пустая</p>
    <p class="cart-empty__desc">Вероятней всего, вы не заказывали ещё пиццу.<br>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
    <div class="cart-empty__img">
      <img src="@/assets/img/cartPeople.png" alt="cartPeople">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.cart-empty {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__title {
    text-align: center;
    font-weight: 700;
    font-size: 32px;
  }
  &__desc {
    text-align: center;
    margin-top: 10px;
    font-size: 18px;
    color: #777777;
  }
  &__img {
    margin-top: 50px;
  }
}
</style>