<template>
  <div class="order-sort">
    <div class="select">
      <span>Сортировать по </span>
      
      <vSelect
        :values="sortMethods"
        @set-chosen="setChosen($event)"
        :curIndex="chosenIndex"
      />

    </div>
  </div>
</template>

<script>
import vSelect from '@/components/UI/select'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'order-sort',
  components: { vSelect },
  computed: mapGetters('sortByOrder', ['sortMethods', 'chosenValue', 'chosenIndex']),
  methods: mapActions('sortByOrder', ['setChosen'])
}
</script>

<style lang="scss" scoped>
.order-sort {
  .select {
    span {
      font-weight: 700;
      font-size: 14px;
      color: #2C2C2C;
      margin-right: 3px;
    }
  }
}
</style>