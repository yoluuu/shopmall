<template>
  <div class="tabControl">
    <div v-for="(item, index) in title" class="tabControlItem"
         :class="{active: index===currentIndex}"  @click="change(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return {
      currentIndex: 0
    }
  },
  props: {
    title: {
      type: Array,
      default(){
        return [];
      }
    }
  },
  methods: {
    change(index) {
      this.currentIndex = index;
      this.$emit('tabControlClick', index)
    }
  }
}
</script>

<style scoped>
  .tabControl {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;

    /*position: sticky;*/
    /*top: 44px;*/

  }
  .tabControlItem {
    flex: 1;
  }

  .tabControlItem span{
    font-size: 15px;
    padding: 5px;
  }

  .active {
    color: #f19aaa;
  }
  .active span {
    border-bottom: 3px solid #f19aaa;
  }
</style>