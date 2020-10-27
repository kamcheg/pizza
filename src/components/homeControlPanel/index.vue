<template>
  <div class="home-control-panel">

    <sortByType/>
    <sortByOrder/>
    
  </div>
</template>

<script>
import sortByType from './typeSort'
import sortByOrder from './orderSort'

export default {
  name: 'home-control-panel',
  components: {
    sortByType, sortByOrder
  }
}
</script>

<style lang="scss" scoped>
.home-control-panel {
  display: flex;
  justify-content: space-between;
  align-items: center; 
}
</style>
