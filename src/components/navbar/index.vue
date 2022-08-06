<template>
  <div class="navbar" :class="toggleNav">
    <router-link to="/" class="nav-left">
      <div class="logo"></div>
      <div class="title">HaoYu Li's Home</div>
    </router-link>
    <div class="link-container">
      <router-link to="/aboutme">
        <span>关于我</span>
      </router-link>
      <router-link to="/aboutweb">
        <span>关于本站</span>
      </router-link>
      <!-- <router-link to="/test">
        <span>test</span>
      </router-link> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

let toggleNav = ref("");

window.onscroll = () => {
  if (window.scrollY > 30) {
    toggleNav.value = "active";
  } else toggleNav.value = "";
};
</script>

<style lang="less" scoped>
.navbar {
  background-color: rgba(0, 255, 255, 0.5);
  height: 55px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 200px;
  transition: 1s;

  // box-shadow: 5px 0 10px aqua;

  .nav-left {
    color: black;
    height: 100%;
    line-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    .logo {
      height: 40px;
      width: 40px;
      background: url(../../assets/logo.jpg) center no-repeat;
      background-size: cover;
      margin-right: 10px;
      border-radius: 5px;
      transition: all 0.5s;
    }
    .title {
      // font-size: 13px;
      transition: all 0.5s;
    }
  }
  .nav-left:hover .logo {
    height: 45px;
    width: 45px;
  }
  .nav-left:hover .title {
    color: #ccc;
  }
}
.link-container {
  span {
    color: black;
    display: inline-block;
    margin-right: 25px;
    transition: all 0.5s;
    cursor: pointer;
    font-size: 1em;
    font-weight: 700;
  }
  span:hover {
    font-size: 0.9em;
    color: #ccc;
  }
}
.navbar.active {
  background: rgba(0, 0, 0, 0.8);
  .nav-left,
  span {
    color: #fff;
  }
}
.navbar:hover {
  background-color: rgba(0, 255, 255, 0.8);
}
</style>
