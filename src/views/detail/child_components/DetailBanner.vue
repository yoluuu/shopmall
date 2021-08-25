<template>
  <swiper class="detailBanner">
    <swiper-item v-for="item in topImages" class="bannerItem">
      <img :src="item" alt="" >
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'

export default {
  name: "DetailBanner",
  props: {
    topImages: {
      type:Array,
      default() {
        return [];
      }
    }
  },

  components: {
    Swiper,
    SwiperItem
  },
  methods: {

  }
}
</script>

<style scoped>
  .detailBanner {
    height: 350px;
    overflow: hidden;
  }
</style>