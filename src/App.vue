<template>
  <navbar class="navbar" />
  <router-view class="view-container"></router-view>
</template>

<script setup>
import navbar from "./components/navbar/index.vue";
</script>

<style lang="less" scoped>
.navbar {
  position: fixed;
  padding-top: 5px;
  top: 0;
  left: 0;
  z-index: 2;
}
.view-container {
  padding: 0 20px;
}
</style>
