<template>
  <div class="cart-filled-product-card-detail">
    <div class="cart-filled-product-card-detail__left">
      <img :src="require('@/assets/img/' + img)" alt="pizza-img">
    </div>
    <div class="cart-filled-product-card-detail__right">
      <p class="cart-filled-product-card-detail__title">{{name}}</p>
      <p class="cart-filled-product-card-detail__params">{{dough}} тесто, {{size}}.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    name: String,
    img: String,
    size: String,
    dough: String
  }
}
</script>

<style lang="scss" scoped>
.cart-filled-product-card-detail {
  display: flex;
  align-items: center;
  width: 375px;

  &__left img {
    width: 80px;
  }

  &__right {
    margin-left: 13px;
    margin-top: -4px;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
  }

  &__params {
    color: #8D8D8D;
    font-size: 16px;
  }
}
</style>