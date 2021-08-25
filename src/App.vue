<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-nav></main-nav>
  </div>
</template>

<script>
import MainNav from "./components/content/mainNav/MainNav";

export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    MainNav
  }
}
</script>


<style>
  @import "assets/css/base.css";
  body{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  html{
    overflow: hidden;
  }

</style>
