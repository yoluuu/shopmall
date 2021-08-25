<template>
  <div class="detailInfo" v-if="Object.keys(detailInfo).length !== 0">
    <div class="detailInfoDesc">{{detailInfo.desc}}</div>
    <div>
      <div class="detailInfoKey">{{detailInfo.detailImage[0].key}}</div>
      <div class="detailInfoImg">
        <img v-for="(item, index) in detailInfo.detailImage[0].list"
             :src="item"
             :key="index"
             alt=""
             @load="imgLoaded">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailInfo",
  data() {
    return {

    }
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoaded() {
      this.$emit("imgLoaded");
    }
  }
}
</script>

<style scoped>
  .detailInfo {
    padding: 15px 6px;
    color: #696767;
    border-bottom: solid 4px rgba(100, 100, 100, .1);
  }
  .detailInfo .detailInfoDesc {
    border-bottom:2px solid #bbe1f1;
    padding: 15px 3px;
    font-size: 14px;
    text-indent: 2em;
    line-height: 180%;
  }

  .detailInfo .detailInfoKey {
    text-align: center;
    padding: 8px;
    color: darkorange;
  }

  .detailInfoKey::before, .detailInfoKey::after {
    content: '——';
    padding: 10px;
  }

  .detailInfo .detailInfoImg img{
    width: 100%;
  }
</style>