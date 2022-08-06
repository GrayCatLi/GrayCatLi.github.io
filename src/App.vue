<template>
  <navbar class="navbar" />
  <router-view v-slot="{ Component }" class="view-container">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
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
  padding: 0 20vw;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
