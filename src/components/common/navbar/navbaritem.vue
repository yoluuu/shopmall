<template>
    <div class="navbar-item" @click="itemClick">
<!--      slot无法直接进行v-bind、v-if v-click等操作,因此需要在其外层添加盒子包裹，并在盒子上进行相应操作-->
      <div v-if="!isActive"> <slot name="item-img"></slot> </div>
      <div v-else> <slot name="item-active"></slot> </div>
      <div :style="isActive? {color: active_color} : {}"> <slot name="item-text"></slot> </div>

    </div>

</template>

<script>
export default {
  name: "navbaritem",
  props: {
    path: String,
    active_color: {
      type: String,
      default: () => 'red',
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  data(){
    return {

    }
  },
  methods: {
    itemClick(){
      //在push方法上添加catch可以避免连点报错的情况,异常被抓取
      this.$router.push(this.path).catch(err => err);
    }
  }
}
</script>

<style scoped>
  .navbar-item {
    flex: 1;
    text-align: center;
    margin-top: 3px;
    font-size: 14px;
  }
  .navbar-item img {
    height: 24px;
    width: 24px;
    margin-bottom: -2px;
  }
  .active{
    color: red;
  }

</style>
