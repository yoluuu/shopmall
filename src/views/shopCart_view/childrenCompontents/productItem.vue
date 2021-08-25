<template>
  <div class="productItem" v-if="Object.keys(product).length">
    <check-box :is-selected="product.isSelected"
                @checkClicked="handleCheckClicked">
    </check-box>
    <div class="productImg">
      <img :src="product.image" alt="">
    </div>
    <div class="productInfo">
      <div class="productTitle">{{product.title}}</div>
      <div class="productDesc">{{product.desc}}</div>
      <div class="price_num">
        <span class="productPrice">￥{{product.price}}</span>
        <span class="productNum">x{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import checkBox from "./checkBox";

export default {
  name: "productItem",
  components: {
    checkBox,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    handleCheckClicked() {
      this.product.isSelected = !this.product.isSelected;
    }
  }
}
</script>

<style scoped>
  .productItem {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid rgba(100, 100, 100, .2);
    padding: 8px;
  }

  .productImg {
    padding: 5px;
  }

  .productImg img {
    height: 110px;
    width: 80px;
    border-radius: 8px;
  }

  .productInfo {
    padding: 5px 10px;
    overflow: hidden;
    font-size: 18px;
  }

  .productTitle, .productDesc {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .productInfo .productDesc {
    padding: 20px 10px 32px 2px;
    font-size: 15px;
    color: #b6b5b5;
  }

  .price_num {
    margin-right: 8px;
    display: flex;
    justify-content: space-between;
  }

</style>