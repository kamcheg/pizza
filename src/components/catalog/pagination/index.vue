<template>
  <div class="pagination">
    <div
      class="pagination__item pagination-item"
      @click="changePageNumber({prev: true})"
    >prev</div>
    
    <paginationItem
      v-for="i of pages"
      :key="i"
      :number="i"
      @click="changePageNumber"
      class="pagination__item"
      :class="{'pagination-item_active': currentPage === i}"
    />

    <div
      class="pagination__item pagination-item"
      @click="changePageNumber({next: true})"
    >next</div>
  </div>
</template>

<script>
import paginationItem from './paginationItem'

export default {
  name: 'Pagination',
  components: {
    paginationItem
  },
  props: {
    pages: Number,
    currentPage: Number
  },
  methods: {
    changePageNumber(event) {
      this.$emit('change-num', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: flex-end;

  &__item {
    padding: 10px;
    margin-right: 10px;
  }
}
</style>