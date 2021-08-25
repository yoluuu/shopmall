<template>
  <div class="comment" v-if="Object.keys(commentInfo).length">
    <div class="commentHeader">
      <span class="headerLeft">用户评价  {{commentInfo.cRate}}</span>
      <span class="headerRight">更多></span>
    </div>
    <div class="commentInfo">
      <div class="userInfo">
        <img :src="commentInfo.list[0].user.avatar" alt="">
        <span>{{commentInfo.list[0].user.uname}}</span>
      </div>
      <div class="content">{{commentInfo.list[0].content}}</div>
      <div class="introduce">
        <span class="time">{{commentInfo.list[0].created | formatTime}}</span>
        <span>{{commentInfo.list[0].style}}</span>
      </div>
      <div class="commentImg" v-if="commentInfo.list[0].images">
        <img v-for="(item,index) in commentInfo.list[0].images" :src="item" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
//引入时间戳格式化函数
import {formatDate} from "../../../common/Utils"

export default {
  name: "DetailComment",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters:{
    formatTime(value) {
      const time = new Date(value * 1000);
      return formatDate(time, 'yyyy/MM/dd');
    }
  }
}
</script>

<style scoped>
  .comment {
    padding: 5px 12px 25px;
    border-bottom: solid 4px rgba(100, 100, 100, .1);
  }
  .commentHeader {
    position: relative;
    padding: 15px 0px;
    border-bottom: 2px solid rgba(100, 100, 100, 0.3);
  }
  .commentHeader .headerRight {
    position: absolute;
    font-size: 14px;
    top: 18px;
    right: 10px;
  }

  .commentInfo .userInfo {
    margin: 14px 0;
  }

  .userInfo img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .userInfo span {
    position: relative;
    top: -18px;
    left: 12px;
    font-size: 16px;
  }

 .content, .introduce, .commentImg {
   padding: 0px 8px;
   color: rgba(100, 100, 100, 0.6);
   font-size: 16px;
 }

 .content {
   line-height: 25px;
 }

 .introduce {
   margin: 10px 0;
 }

 .introduce .time{
   margin-right: 12px;
 }

  .commentImg img{
    width: 90px;
    height: 90px;
  }

</style>