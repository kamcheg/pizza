<template>
  <div
    class="pagination-item"
    @click="$emit('click', {pageNum: number})"
  >
    <span>{{number}}</span>
  </div>
</template>

<script>
export default {
  name: "paginationItem",
  props: {
    number: Number,
  }
}
</script>

<style lang="scss">
.pagination-item {
  color: orange;
  border: 1px solid;
  transition-duration: .2s;
  user-select: none;

  &_active, &:hover {
    background: orange;
    color: #fff;
    cursor: pointer;
    border-color: orange;
  }

  span {
    font-size: 20px;
    font-weight: 500;
  }
}
</style>