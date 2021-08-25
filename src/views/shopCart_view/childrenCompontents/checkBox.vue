<template>
  <div class="checkBox" :class="{selected : isSelected}" @click="checkClicked">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "productCheckBox",
  props: {
    isSelected: {
      type: Boolean,
      default(){
        return true;
      }
    }
  },
  methods: {
    checkClicked() {
      this.$emit('checkClicked');
    }
  }
}
</script>

<style scoped>
  .checkBox {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #e6e6e6;
  }
  .checkBox img {
    height: 100%;
  }
  .selected {
    background-color: hotpink;
  }
</style>