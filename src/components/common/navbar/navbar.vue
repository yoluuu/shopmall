<template>
  <div id="navbar">
    <slot></slot>
  </div>
</template>

<script>
import NavBarItem from './navbaritem'
export default {
  name: "navbar",
  components: {
    NavBarItem,
  }
}
</script>

<style scoped>
  #navbar {
    display: flex;
    height: 49px;
    background-color: #f6f6f6;
    box-shadow: 0px 0px 2px rgba(204, 204, 204, 0.3);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>
