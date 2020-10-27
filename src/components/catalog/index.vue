<template>
  <div class="catalog">
    <p class="catalog__title">{{chosenLabel}} пиццы</p>
    
    <div class="catalog__list">
      <product-card
        v-for="product of productPerPage"
        :key="product.id"
        :productData="product"
        class="catalog__item"
      />
    </div>
 
    <v-pagination
      @change-num="changePageNumber"
      :pages="pagesQty"
      :currentPage="currentPageNumber"
      v-if="pagesQty > 1"
    />

  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import productCard from '../productCard'
import vPagination from './pagination'

export default {
  name: 'catalog',
  components: {
    productCard, vPagination
  },
  computed: {
    ...mapGetters({baseProductList: 'products'}),
    ...mapGetters('sortByType', ['chosenLabel', 'chosenId']),
    ...mapGetters('sortByOrder', {sortByOrder: 'chosenValue'}),
    ...mapGetters('catalogPagination', ['perPage', 'currentPageNumber', 'pagesQty']),

    allProducts() {
      return this.chosenId === 'all' 
        ? this.baseProductList
        : this.baseProductList.filter(product => product.type === this.chosenId)
    },
    productPerPage() { // продукты которые будут отображаться на странице
      const start = (this.currentPageNumber - 1) * this.perPage
      const end = this.currentPageNumber * this.perPage
      return this.allProducts.slice(start, end)
    }
  },
  methods: {
    ...mapMutations('catalogPagination', ['setProductsQty']),
    ...mapActions('catalogPagination', ['setPageNumber']),

    changePageNumber({pageNum, prev, next}) { // изменение страницы с продуктами
      this.setPageNumber({pageNum, prev, next})
    }
  },
  watch: {
    allProducts() {
      this.setProductsQty(this.allProducts.length)
    }
  },
  created() {
    this.setProductsQty(this.allProducts.length)
  }
}
</script>

<style lang="scss">
.catalog {
  
  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__title {
    margin: 35px 0;
    font-weight: 700;
    font-size: 32px;
  }
  
  &__item {
    margin-right: 28px;
    margin-bottom: 65px;

    &:nth-child(4n+4) { margin-right: 0px; }
  }
}
</style>