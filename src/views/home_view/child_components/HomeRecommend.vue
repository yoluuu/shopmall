<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    border-bottom: 10px solid #f7f7f7;
  }

  .recommendItem {
    flex: 1;
    font-size: 12px;
    padding: 10px 0 15px 0;
  }

  .recommendItem img {
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
</style>