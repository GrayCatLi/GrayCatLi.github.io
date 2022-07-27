<template>
  <div class="navbar">
    <div class="link-container">
      <router-link>
        <span>About me</span>
      </router-link>
      <router-link>
        <span>About The Website</span>
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
  background-color: #ccc;
}
.link-container {
  float: right;
  span {
    display: inline-block;
    background-color: #fff;
    margin-right: 25px;
    transition: all 0.5s;
    cursor: pointer;
  }
  span:hover {
    background-color: aqua;
  }
}
</style>