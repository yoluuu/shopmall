<template>
  <div class="detail">
    <detail-nav-header class="detailNavHeader"  ref="detailNav"
                       @detailNavClick="navClicked">
    </detail-nav-header>
    <scroll class="detailScroll" ref="detailScroll"
            :probe-type="3"
            @pullingDown="handlePullingDown"
            @scrollListen="handleScrollListen">
      <detail-banner :top-images="topImages" ></detail-banner>
      <detail-base-info :good-info="goodInfo"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo" ></detail-shop-info>
      <detail-info :detail-info="detailInfo" @imgLoaded="detailInfoImgLoaded"></detail-info>
      <detail-params :params-info="params" ref="params"></detail-params>
      <detail-comment :comment-info="comment" ref="comment"></detail-comment>
      <div class="recommend" >
        <div class="recommendTitle">—— 看了又看 ——</div>
        <good-list :good-list="recommendInfo" ref="recommend"></good-list>
      </div>
    </scroll>
    <back-top @click.native="detailBackTop" v-show="isShowBackTop"></back-top>
    <detail-nav-bottom @addCart="handleAddCart"></detail-nav-bottom>
  </div>

</template>

<script>
//调用common中的公共组件
import Scroll from "../../components/common/scroll/Scroll";
import GoodList from "../../components/content/goods/GoodList";
import BackTop from "../../components/content/backTop/BackTop";

//调用的视图子组件child_component
import DetailNavHeader from "./child_components/DetailNavHeader";
import DetailBanner from "./child_components/DetailBanner";
import DetailBaseInfo from "./child_components/DetailBaseInfo";
import DetailShopInfo from "./child_components/DetailShopInfo";
import DetailInfo from "./child_components/DetailInfo";
import DetailParams from "./child_components/DetailParams";
import DetailComment from "./child_components/DetailComment";
import DetailNavBottom from "./child_components/DetailNavBottom";

//调用的方法
import {getDetailData, getRecommend, Goods, Shop} from "../../network/detailRequest";
import {debounce} from "../../common/Utils";

export default {
  name: "Detail",
  data() {
    return {
      iid: '',
      topImages: [],
      goodInfo: {},
      shopInfo: {},
      detailInfo: {},
      params: {},
      comment: {},
      recommendInfo: [],
      getScrollY: [],
      currentIndex: 0,
      isShowBackTop: false,
    }
  },
  components: {
    Scroll,
    GoodList,
    BackTop,

    DetailNavHeader,
    DetailBanner,
    DetailBaseInfo,
    DetailShopInfo,
    DetailInfo,
    DetailParams,
    DetailComment,
    DetailNavBottom
  },

  created() {
    //获取路径的iid
    this.iid = this.$route.query.iid;

    //发送网络请求返回商品的详情数据
    getDetailData(this.iid).then(res => {
      console.log(res);
      const data = res.result;
      //1、获取详情页轮播图信息
      this.topImages = data.itemInfo.topImages;

      //2、获取商品的基本信息
      this.goodInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      //3、获取店铺的基本信息
      this.shopInfo = new Shop(data.shopInfo);

      //4、获取商品详情信息
      this.detailInfo = data.detailInfo;

      //5、获取商品的信息参数和尺寸规则
      this.params = data.itemParams;

      //6、获取详情页的评论信息
      this.comment = data.rate;

    });

    //发送网络请求返回推荐商品的数据
    getRecommend().then(res => {
      this.recommendInfo = res.data.list;
      console.log(this.recommendInfo);
    })

    this.getScrollFn = debounce(() => {
      this.getScrollY = [];
      this.getScrollY.push(0);
      this.getScrollY.push(this.$refs.params.$el.offsetTop);
      this.getScrollY.push(this.$refs.comment.$el.offsetTop);
      this.getScrollY.push(this.$refs.recommend.$el.offsetTop);
      this.getScrollY.push(Number.MAX_VALUE);
      console.log(this.getScrollY);
    }, 500)

  },

  methods: {
    //1、'下拉刷新'事件的监听
    handlePullingDown() {
      location.reload();
      this.$refs.detailScroll.scroll.finishPullDown();
    },

    //2、详情页导航栏点击事件的监听
    navClicked(index) {
      this.$refs.detailScroll.scrollTo(0, -this.getScrollY[index], 300);
    },
    //3、详情页商品信息的图片加载
    detailInfoImgLoaded() {
      this.$refs.detailScroll.refresh();
      this.getScrollFn();
    },
    //4、处理滚动事件
    handleScrollListen(position) {
      //处理scroll滚动导航栏变化事件
      let scrollY = -position.y;
      for(let i=0; i < this.getScrollY.length - 1; i++) {
        if(this.currentIndex !== i && scrollY >= this.getScrollY[i] && scrollY < this.getScrollY[i+1]){
          this.currentIndex = i;
        }
      }
      this.$refs.detailNav.currentIndex = this.currentIndex;

      //处理滚动显示'返回顶部backTop'事件
      this.isShowBackTop = (-position.y) > 1000? true : false;
    },

    //5、'返回顶部'的处理方法
    detailBackTop() {
      this.$refs.detailScroll.scrollTo(0, 0, 300);
    },

    //6、处理添加购物车事件
    handleAddCart() {
      console.log(this.goodInfo);
      // shopInfo: {},
      const product = {}
      product.iid = this.iid;
      product.image = this.topImages[0];
      product.title = this.goodInfo.title;
      product.desc = this.goodInfo.desc;
      product.price = this.goodInfo.realPrice;
      product.count = 1;

      this.$store.dispatch('addCart', product)
                  .then(res => {
                    this.$toast.show(res);
                  });
    }
  }
}
</script>

<style scoped>
  .detail {
    position: relative;
    height: 100vh;
    z-index: 9;
    background-color: #fff;
  }
  
  .detail .detailNavHeader {
    position: relative;
    background-color: #fff;
    z-index: 9;
  }
  
  .detail .detailScroll {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    /*overflow: hidden;*/
  }

  .detail .recommend {
    padding: 10px 0;
    text-align: center;
  }

  .detail .recommend .recommendTitle {
    line-height: 26px;
    color: darkorange;
    font-weight: 600;
  }
</style>