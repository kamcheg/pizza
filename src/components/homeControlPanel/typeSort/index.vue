<template>
  <div class="type-sort">
    
    <typeSortItem
      v-for="type of pizzaTypes"
      :key="type.id"
      class="type-sort__item"
      :type="type"
      :selected="chosenId"
      @change="changeCategory($event)"
    />

  </div>
</template>

<script>
import typeSortItem from './typeSortItem'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'type-sort',
  components: { typeSortItem },
  computed: mapGetters('sortByType', ['pizzaTypes', 'chosenId']),
  methods: {
    ...mapMutations('sortByType', ['setChosen']),
    ...mapMutations('catalogPagination', ['zeroingCurrentPage']),

    changeCategory(event) {
      this.setChosen(event)
      this.zeroingCurrentPage()
    }
  }
}
</script>

<style lang="scss" scoped>
.type-sort {
  width: 810px;
  display: flex;

  &__item {
    flex-grow: 1;
    margin-right: 9px;
    font-size: 16px;
    padding: 13px;
  }
}
</style>