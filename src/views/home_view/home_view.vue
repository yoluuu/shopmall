<template>
  <div id="home">
    <nav-header class="home_header">
      <span slot="header_center">婆乸街</span>
    </nav-header>

    <tab-control :title="['流行', '新款', '精选']"  ref="tabControlOut"
                 @tabControlClick="tabControlClick" v-show="tabControlFixed" class="homeTabControl"/>
    <scroll class="homeScroll" ref="homeScroll"
            :probe-type="3"
            @scrollListen="handleScrollListen"
            :pullUpLoad="true"
            @pullingUp="handlePullingUp" @pullingDown="handlePullingDown">
      <home_banner :banners="banners" @bannerImgLoad="bannerImgLoad" />
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature/>
      <tab-control :title="['流行', '新款', '精选']"  ref="tabControlIn"  class="homeTabControl"
                   @tabControlClick="tabControlClick" :class="{tabControlFixed: tabControlFixed}"/>
      <good-list :good-list="goods[currentType].list" ></good-list>
    </scroll>
    <back-top @click.native="homeBackTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
//调用的公共组件components目录
import NavHeader from "../../components/common/navheader/NavHeader";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodList from "../../components/content/goods/GoodList";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";

//调用的视图子组件child_component
import Home_banner from "./child_components/Home_banner";
import HomeRecommend from "./child_components/HomeRecommend";
import HomeFeature from "./child_components/HomeFeatureView";


//调用的方法
import {getHomeMultidata, getHomeGoodsData} from "../../network/homeRequest";
import {debounce} from "../../common/Utils";

export default {
  name: "home_view",
  data(){
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabControlOffsetTop: 0,
      tabControlFixed: false,
      pageLeavePosition: 0,

    }
  },
  components: {
    NavHeader,
    TabControl,
    GoodList,
    Scroll,
    BackTop,

    Home_banner,
    HomeRecommend,
    HomeFeature,

  },
  created() {
    //1、获取轮播图的数据对象
    this.getHomeMultidata();

    //2、获取商品信息数据(请求三次数据,可以让用户不用在点击后再进行网络请求，防止了延迟加载的情况)
    this.getHomeGoodsData('pop');
    this.getHomeGoodsData('new');
    this.getHomeGoodsData('sell');
  },

  mounted() {
    //调用防抖函数以减少scroll刷新的次数
    const refresh = debounce(this.$refs.homeScroll.refresh, 10);
    //接受GoodItem发送的事件并对scroll组件进行处理
    this.$bus.$on('itemImageLoaded', () => {
      refresh();
    })
  },

  activated() {
    this.$refs.homeScroll.refresh();
    this.$refs.homeScroll.scrollTo(0, this.pageLeavePosition, 0);
  },
  deactivated() {
    this.pageLeavePosition = this.$refs.homeScroll.getScrollPosition();
  },

  methods: {
    /*
     *  事件监听的方法
     */
    //1、监听商品控制栏被点击的方法
    tabControlClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break
        case 1:
          this.currentType = 'new';
          break
        case 2:
          this.currentType = 'sell';
          break
      }
      this.$refs.tabControlIn.currentIndex = index;
      this.$refs.tabControlOut.currentIndex =index;
    },

    //2、'返回顶部'的监听方法
    homeBackTop() {
      this.$refs.homeScroll.scrollTo(0, 0);
    },

    //3、'返回顶部backTop '组件隐藏与显示的监听
    handleScrollListen(position) {
      //根据滚动的位置判断是否显示‘返回顶部backTop’组件
      this.isShowBackTop = (-position.y) > 1000? true : false;

      //根据滚动的位置判断tabControl导航栏是否固定顶部
      this.tabControlFixed = (-position.y) > this.tabControlOffsetTop ? true : false;
    },

    //4、'上拉加载更多'事件的监听
    handlePullingUp() {
      this.getHomeGoodsData(this.currentType);
      this.$refs.homeScroll.finishPullUp();
    },

    //5、'下拉刷新'事件的监听
    handlePullingDown() {
      location.reload();
      this.$refs.homeScroll.scroll.finishPullDown();
    },

    //6、轮播图的图片加载监听,从而获取TabControl导航栏距离
    bannerImgLoad(){
      this.tabControlOffsetTop = this.$refs.tabControlIn.$el.offsetTop;
    },

    // 4、防抖函数(用于延迟提交数据/监听等操作),相当于给某函数添加一层定时器进行延迟操作
    // debounce(fn, delay) {
    //   let timer = null;
    //   return function () {
    //     if(timer) clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       fn();
    //     },delay)
    //   }
    // },

    /*
     * 网络请求的方法
     */
    //获取轮播图数据的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        //this指向created的外层，即Home_view本身
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.recommends);
      })
    },
    //获取首页商品数据的方法
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1;
      getHomeGoodsData(type, page).then(res => {
        // for(let i of res.data.list){
        //   this.goods.pop.list.push(i);
        // }
        this.goods[type].list.push(...res.data.list);     //与for循环的效果相同
        console.log(this.goods[type].list);
      })
      //每次从服务器取用完数据后修改page属性
      this.goods[type].page = page;
    }
  }
}
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    position: relative;
    /*因为homeScroll元素没有高度,在overflow时就不会显示，因此要在其父元素添加个高度以保证能够将内容显示*/
    height: 100vh;

  }
  .home_header {
    background-color: var(--color-tint);
    color: white;

  }
  .homeTabControl {
    position: relative;
    z-index: 9;
  }

  .homeScroll {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    /*margin-top: 44px;*/
    /*height: calc(100% - 93px);*/
    overflow: hidden;
  }

</style>
