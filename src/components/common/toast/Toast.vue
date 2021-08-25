<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow: false,
    }
  },
  methods: {
    show(message, time = 2000){
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.message = '';
        this.isShow = false;
      }, time)
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 15px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 15px;
    z-index: 99;
  }
</style>