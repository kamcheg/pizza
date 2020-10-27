<template>
  <div class="seetings-row">
    <seetingsRowOption
      v-for="(item, index) of option.values"
      :key="index"
      :item="item"
      @change-option="changeOption($event)"
      :class="{'seetings-row-option_active': item === selectedSize || item === selectedDough}"
    />
  </div>
</template>

<script>
import seetingsRowOption from './seetingsRowOption'

export default {
  name: "seetingsRow",
  components: {
    seetingsRowOption
  },
  props: {
    option: {
      type: Object,
      required: true
    },
    selectedSize: String,
    selectedDough: String,
  },
  methods: {
    changeOption(event) {
      this.$emit('change-option', {prop: event, selectName: this.option.selectName})
    }
  }
}
</script>

<style lang="scss" scoped>
.seetings-row {
  display: flex;
}
</style>