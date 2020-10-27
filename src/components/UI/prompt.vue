<template>
  <div
    class="prompt"
    :class="{'prompt_hide': !isVisiblePrompt}"
  ><span>Товар уже в корзине</span></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'v-prompt',
  computed: mapGetters('cart', ['isVisiblePrompt'])
}
</script>

<style lang="scss" scoped>
.prompt {
    width: 300px;
    height: 80px;
    background: #fff;
    position: fixed;
    top: 50px;
    left: 50px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: .7s;

    &_hide { transform: translateY(-200px); }
    span { font-size: 20px; }
  }
</style>