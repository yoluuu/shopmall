<template>
  <div class="goodItem" @click="itemClicked" v-if="Object.keys(goodItem).length">
    <img :src="showImg" alt="" @load="imgLoaded">
    <div class="itemInfo">
      <p>{{goodItem.title}}</p>
      <span class="itemPrice">{{goodItem.price}}</span>
      <span class="itemLike" @click.once="collect">
        <img :class="{itemLikeActive: collected}" src="~assets/img/common/collect.svg" alt="">
        {{goodItem.cfav}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodItem",
  data() {
    return {
      collected: false
    }
  },
  props: {
    goodItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImg() {
      return this.goodItem.image || this.goodItem.show.img
    }
  },

  methods: {
    collect(){
      this.goodItem.cfav = parseInt(this.goodItem.cfav) + 1;
      this.collected = true;
    },

    imgLoaded() {
      // console.log('图片加载完成请求');
      this.$bus.$emit('itemImageLoaded');
    },

    itemClicked() {
      // this.$router.push('/detail/'+this.goodItem.iid);

      this.$router.push({
        path: '/detail',
        query: {
          iid: this.goodItem.iid,
        }
      })
    },
    mounted() {
      console.log(this.goodItem);
    }
  }
}
</script>

<style scoped>
  .goodItem {
    position: relative;
    padding-bottom: 40px;
    width: 46%;
    margin-bottom: 5px;
  }
  .goodItem img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  .itemInfo {
    font-size: 12px;
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .itemInfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /*margin-bottom: 3px;*/
    padding: 3px 6px 3px 6px;
  }

  .itemInfo .itemPrice {
    font-size: 14px;
    color: var(--color-high-text);
    margin-left: 3px;
  }

  .itemPrice::before {
    content: '￥';
    font-size: 10px;
  }

  .itemLike {
    position: absolute;
    right: 5px;
  }

  /*.itemLike::before {*/
  /*  content: '';*/
  /*  position: absolute;*/
  /*  width: 14px;*/
  /*  height: 14px;*/
  /*  top: -1px;*/
  /*  left: -15px;*/
  /*  !*background: aurl("~ssets/img/common/collect.svg") 0 0/14px 14px;*!*/
  /*}*/
  .itemLike img {
    position: absolute;
    width: 14px;
    height: 14px;
    top: -1px;
    left: -15px;
  }
  .itemLikeActive {
    background-color: pink;
  }


</style>