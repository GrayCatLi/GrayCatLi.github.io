<template>
  <div class="navbar">
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
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  width: 100vw;
  line-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  .nav-left {
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
      font-size: 13px;
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
    display: inline-block;
    margin-right: 25px;
    transition: all 0.5s;
    cursor: pointer;
    font-size: 13px;
  }
  span:hover {
    font-size: 14px;
    color: #ccc;
  }
}
</style>
