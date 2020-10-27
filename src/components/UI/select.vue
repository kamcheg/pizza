<template>
  <div class="select" @click="toggleVisible">
    <span class="select__current">{{activeOption}}</span>
    
    <div class="select__options" v-show="isVisible">
      <div
        v-for="(item, index) of values"
        :key="item"
        class="select__option"
        @click="setActiveIndex(index)"
      >{{item}}</div>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    isVisible: false
  }),
  props: {
    values: Array,
    curIndex: Number
  },
  computed: {
    activeOption() {
      return this.values[this.curIndex]
    }
  },
  methods: {
    setActiveIndex(index) {
      this.$emit('set-chosen', index)    
    },
    toggleVisible() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  user-select: none;
  display: inline-block;

  &__current {
    color: #FE5F1E;
    cursor: pointer;
  }
  &__options {
    box-shadow: 0px 5px 15px 3px rgba(0, 0, 0, 0.09);
    position: absolute;
    bottom: -5px;
    left: 0;
    transform: translateY(100%);
    display: inline-flex;
    flex-direction: column;
    background: #fff;
    border-radius: 8px;
    min-width: 130px;
  }
  &__option {
    font-size: 14px;
    padding: 10px;

    &:hover {
      color: #FE5F1E;
      background: rgba(254, 95, 30, 0.05);
      cursor: pointer;
    }
  }
}
</style>