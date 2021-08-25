<template>
  <div>
    <nav-header>
      <div slot="header_left" class="detailBack" @click="pageBack">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="header_center" class="detailNavTitle">
        <span v-for="(item, index) in title" class="navTitleItem"
              :class="{active: index === currentIndex}" @click="titleItemClick(index)">{{item}}</span>
      </div>
    </nav-header>
  </div>
</template>

<script>
import NavHeader from "../../../components/common/navheader/NavHeader";

export default {
  name: "DetailNavHeader",
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },
  components: {
    NavHeader
  },
  methods: {
    pageBack() {
      this.$router.back();
    },
    titleItemClick(index) {
      this.currentIndex = index;
      this.$emit('detailNavClick', index);
    }
  },
}
</script>

<style scoped>
  .detailNavTitle {
    display: flex;
    font-size: var(--font-size);
  }
  .navTitleItem {
    flex: 1;
  }
  .detailBack img{
    margin-top: 10px;
  }

  .active {
    color: var(--color-high-text);
  }
</style>