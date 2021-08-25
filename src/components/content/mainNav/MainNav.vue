<template>
  <nav-bar>
    <nav-bar-item path="/home" active_color="red">
      <img slot="item-img" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text" >首页</div>
    </nav-bar-item>
    <nav-bar-item path="/category" active_color="red">
      <img slot="item-img" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">类目</div>
    </nav-bar-item>
    <nav-bar-item path="/shopCar" active_color="red">
      <img slot="item-img" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="item-active" src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </nav-bar-item>
    <nav-bar-item path="/profile" active_color="red">
      <img slot="item-img" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </nav-bar-item>
  </nav-bar>
</template>

<script>
import NavBar from '../../common/navbar/navbar';
import NavBarItem from '../../common/navbar/navbaritem'

export default {
  name: "MainNav",
  components: {
    NavBar,
    NavBarItem
  }
}
</script>

<style scoped>

</style>
