<template>
  <div
    :data-value="item"
    class="seetings-row-option"
    @click="$emit('change-option', item)"
  >
    <span> {{item}} </span>
  </div>
</template>

<script>
export default {
  name: "seetingsRowOption",
  props: {
    item: [Number, String]
  },
}
</script>

<style lang="scss" scoped>
.seetings-row-option {
  flex-grow: 1;
  text-align: center;
  background: rgba(255, 255, 255, 0.55);
  margin: 0px 5px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  padding: 10px 0;
  cursor: pointer;

  &_active {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    background: #fff;
  }
}
</style>