<template>
  <div class="shopInfo">
    <div class="shopShowTop">
      <img :src="shopInfo.logo" alt="">
      <p>{{shopInfo.name}}</p>
    </div>
    <div class="shopShowMiddle">
      <div class="shopSellInfo">
        <div>
          <p class="sellFont">{{sellsShow}}</p>
          <p>总销量</p>
        </div>
        <div class="allGood">
          <p class="sellFont">{{shopInfo.goods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shopScoreInfo">
        <table>
          <tr class="scoreItem" v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :style="item.isBetter&&{color: 'red'}">{{item.score}}</td>
            <td class="level" :style="item.isBetter&&{backgroundColor: 'red'}">{{item.isBetter? '高': '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shopShowBottom">
      <p>进店逛逛</p>
    </div>
  </div>
</template>


<script>

export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    sellsShow() {
      let sells = this.shopInfo.sells;
      if(sells < 10000) {
        return sells;
      }
      else if(sells > 1000000){
        return '100万+';
      }
      else {
        let bigNum = (sells - sells % 10000) / 10000;          //计算总销量是万位
        let thousand = (sells - sells % 1000) / 1000 % 10;      //计算总销量的千位
        let hundred = (sells - sells % 100) / 100 % 10;
        return bigNum + '.' + thousand + hundred + '万'
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .shopInfo {
    padding: 20px 8px 20px 8px;
    border-bottom: solid 3px rgba(100, 100, 100, .2);
  }

  .shopShowTop {
    padding: 6px 10px 15px 4px;
  }

  .shopShowTop img {
    width: 60px;
    height: 60px;
    border: 1px solid rgba(100, 100, 100, .3);
    border-radius: 50%;
  }
  .shopShowTop p {
    display: inline-block;
    position: relative;
    top: -25px;
    left: 10px;
    font-size: 16px;
  }

  .shopShowMiddle {
    display: flex;
    justify-content: space-around;
    text-align: center;
    /*这个属性及值：弹性盒子元素在该行的侧轴（纵轴）上居中放置。*/
    align-items: center;
  }

  .shopSellInfo div {
    display: inline-block;
    padding-right: 20px;
    font-size: 14px;
  }
  .allGood {
    border-right: 1px solid rgba(100, 100, 100, .3);
  }

  .shopSellInfo .sellFont {
    font-size: 22px;
    font-weight: 530;
    margin-bottom: 10px;
  }

  .shopShowMiddle .shopScoreInfo {
    font-size: 15px;
  }

  .shopShowMiddle .shopScoreInfo .scoreItem td {
    padding:6px 6px;
  }
  .scoreItem .score {
    color: #7de17d;
  }
  .scoreItem .level {
    color: white;
    background-color: #7de17d;
    border-radius: 6px;
  }
  .shopShowBottom {
    padding: 20px 0 10px;
    text-align: center;
  }
  .shopShowBottom p{
    display: inline-block;
    padding: 6px 40px 6px 40px;
    background: rgba(100, 100, 100, .2);
    border-radius: 20px;
  }
</style>