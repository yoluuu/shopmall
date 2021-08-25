<template>
  <div class="detailBaseInfo">
    <div class="goodTitle">{{goodInfo.title}}</div>
    <div class="goodPrice">
      <span class="newPrice">{{goodInfo.newPrice}}</span>
      <span class="oldPrice">{{goodInfo.oldPrice}}</span>
      <span v-if="goodInfo.discount" class="discount">{{goodInfo.discount}}</span>
    </div>
    <div class="goodOther">
      <span class="goodOtherItem">{{goodInfo.columns && goodInfo.columns[0]}}</span>
      <span class="goodOtherItem">{{goodInfo.columns && goodInfo.columns[1]}}</span>
      <span>{{goodInfo.services && goodInfo.services[goodInfo.services.length-1].name}}</span>
    </div>
    <div class="goodServices" v-if="goodInfo.services">
      <span v-for="index in goodInfo.services.length-1" :key="index" v-if="goodInfo.services[index-1].icon">
        <img :src="goodInfo.services[index-1].icon" alt="" >
        <span>{{goodInfo.services[index-1].name}}</span>
      </span>
    </div>

  </div>
</template>
<!--this.services = services;-->
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goodInfo: {
      type: Object,
      default() {
        return {}
      }
    },
  }
}
</script>

<style scoped>
  .detailBaseInfo {

  }

  .goodTitle {
    font-size: 16px;
    font-weight: bold;
    padding: 20px 10px 20px 10px;
  }

  .goodPrice {
    padding-left: 10px;
  }
  .goodPrice .newPrice {
    color: var(--color-high-text);
    font-size: 20px;
  }
  .goodPrice .oldPrice {
    font-size: var(--font-size);
    color: #c3c3c3;
    text-decoration: line-through;
    margin-left: 8px;
  }
  .goodPrice .discount {
    margin-left: 8px;
    color: white;
    background-color: var(--color-tint);
    border-radius: 6px;
    font-weight: bold;
    position: relative;
    top: -6px;
  }

  .goodOther {
    display: flex;
    justify-content: space-between;
    margin: 20px 8px 0px 8px;
    padding-bottom: 12px;
    font-size: 14px;
    color: #c3c3c3;
    border-bottom: solid 2px rgba(100, 100, 100, .3);
  }

  .goodServices {
    display: flex;
    justify-content: space-between;
    padding: 18px 8px 18px 8px;
    border-bottom: solid 3px rgba(100, 100, 100, .2);
    font-size: 13px;
  }


  .goodServices img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

</style>