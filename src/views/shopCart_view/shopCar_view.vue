<template>
  <div class="cart">
    <nav-header class="cartHeader">
      <div slot="header_center">购物车({{totalProduct}})</div>
    </nav-header>
    <scroll class="cartScroll" ref="cartScroll">
      <product-list></product-list>
    </scroll>
    <cart-nav-bottom class="cartBottom"></cart-nav-bottom>
  </div>
</template>

<script>
//调用common的组件
import NavHeader from "../../components/common/navheader/NavHeader";
import Scroll from "../../components/common/scroll/Scroll";

//调用children子组件
import productList from "./childrenCompontents/productList";
import CartNavBottom from "./childrenCompontents/CartNavBottom";

export default {
  name: "shopCar_view",
  components: {
    NavHeader,
    Scroll,

    productList,
    CartNavBottom
  },
  activated() {
    this.$refs.cartScroll.refresh();
  },
  computed: {
    totalProduct() {
      return this.$store.state.shopCartProduct.length;
    }
  },
}
</script>

<style scoped>
  .cart{
    position: relative;
    height: 100vh;
  }

  .cartHeader {
    background-color: var(--color-tint);
    color: white;
  }

  .cartScroll {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
  }

  .cartBottom {
    position: relative;
    left: 0;
    right: 0;
    top: calc(100% - 133px);
  }
</style>
