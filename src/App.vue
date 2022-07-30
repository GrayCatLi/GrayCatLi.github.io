<template>
  <navbar class="navbar" />
  <router-view class="view-container"></router-view>
</template>

<script setup>
import navbar from './components/navbar/index.vue'
</script>

<style lang="less" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.view-container {
  margin: 120px 450px;
}
</style>
