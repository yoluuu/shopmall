<template>
  <div class="profile">
    <nav-header class="profileHeader">
      <div slot="header_center">我的账户</div>
    </nav-header>
<!--    <user-info></user-info>-->
<!--    状态信息-->
    <div class="account">
    </div>

    <div class="profileList">
      <div class="listItem"></div>
    </div>
  </div>
</template>

<script>
import NavHeader from "../../components/common/navheader/NavHeader";

import UserInfo from "./childrenCompontents/UserInfo";

export default {
  name: "profile_view",
  components: {
    NavHeader,

    UserInfo,
  }
}
</script>

<style scoped>
  .profileHeader {
    background-color: var(--color-tint);
    color: white;
  }
</style>
