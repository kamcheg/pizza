<template>
  <div class="seetings">
    <seetingsRow
      v-for="(option, index) of options"
      :key="index"
      :option="option"
      :selectedSize="productData.selectedSize"
      :selectedDough="productData.selectedDough"
      @change-option="changeOption($event)"
    />
  </div>
</template>

<script>
import seetingsRow from './seetingsRow'

export default {
  name: 'Seetings',
  components: {
    seetingsRow    
  },
  props: {
    productData: {
      type: Object,
      required: true
    }
  },
  computed: {
    options() {
      return this.productData.params
    }
  },
  methods: {
    changeOption(event) {
      this.productData[event.selectName] = event.prop
      // console.log(this.productData)
    }
  }
}
</script>

<style lang="scss" scoped>
.seetings {
  background: #f3f3f3;
  border-radius: 10px;
  padding: 7px 0;

  &-row {    
    margin-bottom: 7px;
    &:nth-last-child(1) {
      margin-bottom: 0px;
    }
  }
}
</style>