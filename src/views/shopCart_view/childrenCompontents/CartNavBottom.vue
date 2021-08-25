<template>
  <div class="cartNavBottom">
    <div class="allSelected">
      <check-box :is-selected="isSelectAll" @click.native="selectAllClicked"></check-box>
      <span>全选</span>
    </div>
    <div class="totalPrice">合计: {{totalPrice}}
    </div>
    <div class="setter-account" @click="accountClicked">结算({{totalNum}})</div>
  </div>
</template>

<script>
import checkBox from "./checkBox";

export default {
  name: "CartNavBottom",
  data(){
    return {
      products: [],
    }
  },
  components: {
    checkBox,
  },
  computed: {
    totalNum() {
      return this.products.filter(item => item.isSelected)
                    .reduce((total, value) => {
                      return total + value.count
                    }, 0);
    },
    totalPrice() {
      return '￥'+this.products.filter(item => item.isSelected)
                          .reduce((total, value) => {
                            return total + value.price * value.count
                          }, 0).toFixed(2);
    },
    isSelectAll() {
      if(this.products.length == 0) {
        return false;
      }
      return !this.products.some(item => item.isSelected == false);
    }
  },
  created() {
    this.products = this.$store.state.shopCartProduct;
  },
  methods: {
    selectAllClicked() {
      if(this.isSelectAll) {
        this.products.forEach(item => item.isSelected = false);
      }else {
        this.products.forEach(item => item.isSelected = true);
      }
    },
    accountClicked() {
     if(this.totalNum == 0) {
       this.$toast.show('您还没有选择宝贝哦！', 1500);
     }
    }
  }
}
</script>

<style scoped>
  .cartNavBottom {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: #eee;
  }

  .allSelected {
    width: 70px;
    display: flex;
    align-items: center;
    margin-left: 25px;
  }

  .allSelected span {
    margin-left: 5px;
  }

  .cartNavBottom .totalPrice {
    height: 40px;
    line-height: 40px;
    vertical-align: bottom;
  }

  .setter-account {
    width: 30%;
    height: 100%;
    padding-top: 12px;
    border-radius: 20px;
    text-align: center;
    /*line-height: 40px;*/
    background-color: orangered;
    font-size: 17px;
    color: white;
  }


</style>