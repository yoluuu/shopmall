<template>
  <div class="navHeader">
    <div class="navHeader_left"><slot name="header_left"></slot></div>
    <div class="navHeader_center"><slot name="header_center"></slot></div>
    <div class="navHeader_right"><slot name="header_right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavHeader"
}
</script>

<style scoped>
  .navHeader {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 1px 2px rgba(204, 204, 204, 0.4);
    /*box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);*/
  }
  .navHeader_left, .navHeader_right{
    width: 60px;
  }
  .navHeader_center {
    flex: 1;

  }
</style>