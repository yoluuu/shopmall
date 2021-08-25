<template>
  <div>
    <product-item v-for="(item, index) in productList"
                  :product="item" :key="index">
    </product-item>
  </div>
</template>

<script>
import productItem from "./productItem";

export default {
  name: "productList",
  components: {
    productItem,
  },
  data() {
    return {
      productList: []
    }
  },
  created() {
    this.productList = this.$store.state.shopCartProduct;
  }
}
</script>

<style scoped>

</style>