<template>
  <div id="app">
    <main-layout>
      <router-view/>
    </main-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import mainLayout from '@/layouts/mainLayout'

export default {
  name: 'App',
  components: {
    mainLayout,
  },
  computed: mapState(['products']),
  created() {
    this.products.forEach(product => {
      this.$set(product, 'quantity', 1)
      this.$set(product, 'selectedDough', 'тонкое')
      this.$set(product, 'selectedSize', 'маленькая')
      this.$set(product, 'params', [
        {
          values: ['маленькая', 'средняя', 'большая'],
          selectName: 'selectedSize'
        },
        {
          values: ['тонкое', 'традиционное'],
          selectName: 'selectedDough'
        }
      ])
    })
  }
}
</script>

<style lang="scss">
@import './assets/scss/main';
</style>
