<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  data(){
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() { return false; }
    },
    pullDownRefresh: {
      type: Boolean,
      default() { return true;  }
    },

  },

  mounted() {
    /**
     * 关于BScroll因为图片未加载而导致高度不确定的情况,可以通过三种方法进行解决，
     * 1、设置observeDom、observeImage属性;
     * 2、创建BScroll时创建定时器以保证晚加载
     * 3、监听图片加载并调用scroll中的refresh方法
     */
    // setTimeout(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {
    //   })
    // },100)
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,             //获取滚动位置
      click: true,                           //点击事件正常执行
      pullUpLoad: this.pullUpLoad,           //页面上拉事件
      pullDownRefresh: this.pullDownRefresh,
      observeDOM: true,                  //图片加载后再创建BScroll
      observeImage: this.observeImage,
    })

    //监听scroll的滑动
    if(this.probeType == 2 || this.probeType == 3){
      this.scroll.on('scroll', position => {
        this.$emit('scrollListen', position);
      })
    }

    //监听scroll的上拉加载事件
    if(this.pullUpLoad){
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp');
      })
    }

    //监听scroll的页面顶部下拉刷新事件
    if(this.pullDownRefresh) {
      this.scroll.on('pullingDown', () => {
        this.$emit('pullingDown');
      })
    }
  },
  methods: {
    //1、刷新Scroll的加载高度
    refresh() {
      // console.log('refresh被执行');
      this.scroll && this.scroll.refresh();
    },

    //2、'返回顶部'的实现
    scrollTo(x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },

    //3、'下拉加载更多'的事件结束监听
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },

    //4、获取滚动的位置
    getScrollPosition() {
      return this.scroll ? this.scroll.y : 0 ;
    }
  }
}
</script>

<style scoped>

</style>