<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'

export default {
  name: "Home_banner",
  data(){
    return {
      imgLoaded: false
    }
  },
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    },

  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      if(!this.imgLoaded) {
        this.$emit('bannerImgLoad');
        this.imgLoaded = true;
      }
    }
  }
}
</script>

<style scoped>

</style>