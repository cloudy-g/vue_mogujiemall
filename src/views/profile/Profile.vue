<template>
  <div id="profile">
    <nav-bar class="profile-nav-bar">
      <template v-slot:center>
        <div>个人信息Demo</div>
      </template>
    </nav-bar>
    <user-info></user-info>
    <user-package></user-package>
    <profile-list></profile-list>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";

import UserInfo from "./profileContent/userInfo";
import UserPackage from "./profileContent/userPackage";
import ProfileList from "./profileContent/profileList";

export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo,
    UserPackage,
    ProfileList,
  },
};
</script>

<style lang="less" scoped>
#profile {
  padding-top: 43px;

  .profile-nav-bar {
    color: #ffffff;
    font-size: 1.5rem;
    text-align: center;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 9;

    background-color: #ff8198;
  }
}
</style>