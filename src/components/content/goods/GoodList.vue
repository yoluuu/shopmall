<template>
  <div class="goodList">
    <good-item v-for="item in goodList" :good-item="item"></good-item>
  </div>
</template>

<script>
import GoodItem from "./GoodItem";

export default {
  name: "GoodList",
  props: {
    goodList: {
      type: Array,
      default(){
        return [];
      }
    }
  },

  components: {
    GoodItem
  }

}
</script>

<style scoped>
  .goodList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10px;
  }
</style>