<template>
  <label
    class="type-sort-item"
    :class="{'type-sort-item_active': shouldBeChecked}"
  >
    <span>{{type.label}}</span>
    <input
      type="radio"
      :checked="shouldBeChecked"
      :value="type.id"
      @change="$emit('change', type.id)"
    >
  </label>
</template>

<script>
export default {
  name: 'type-sort-item',
  props: {
    type: Object,
    selected: String,
  },
  computed: {
    shouldBeChecked() {
      return this.type.id === this.selected
    }
  }
}
</script>

<style lang="scss" scoped>
.type-sort-item {
  display: block;
  text-align: center;
  background: #ececec;
  border-radius: 100px;
  color: #2C2C2C;
  font-weight: 700;
  cursor: pointer;
  transition-duration: .7s;
  transition-property: background color;
  user-select: none;

  &_active {
    background: #282828;
    color: #fff;
  }
  
  input { display: none; }
}
</style>