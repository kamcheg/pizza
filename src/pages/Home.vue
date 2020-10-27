<template>
  <div class="home-page">

    <home-control-panel/>
    <v-catalog/>

  </div>
</template>

<script>
import homeControlPanel from '@/components/homeControlPanel'
import vCatalog from '@/components/catalog'

export default {
  name: 'Home',
  components: {
    homeControlPanel,
    vCatalog
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  
}
</style>