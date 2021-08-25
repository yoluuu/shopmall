<template>
  <div class="navBottom">
    <div class="navLeft">
      <div>
        <i class="service icon"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="shop icon"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="collect icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="navRight">
      <span class="shopBar" @click="addCart">加入购物车</span>
      <span class="buy">购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailNavBottom",
  methods: {
    addCart() {
      this.$emit('addCart');
    }
  },
}
</script>

<style scoped>
  .navBottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0px;
    height: 49px;
    background-color: white;
    display: flex;
  }

  .navLeft {
    flex: 1;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    align-items: center;
  }

  .navLeft .icon {
    display: block;
    width: 25px;
    height: 25px;
    background: url("~assets/img/detail/detail_bottom.png")  0 0/100%;
    text-align: center;
  }

  .navLeft .service {
    background-position: 0 -61px;
  }
  .navLeft .shop {
    background-position: 0 -113px;
  }

  .navBottom .navRight {
    flex: 1;
    line-height: 49px;
    display: flex;
    font-size: 15px;
    text-align: center;
  }

  .navRight  span {
    flex: 1;
  }

  .navRight .shopBar {
    background-color: #ffe817;
    color: #333;
  }
  .navRight .buy {
    background-color: #f69;
    color: white;
  }
</style>