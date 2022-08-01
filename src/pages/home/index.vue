<template>
  <div class="container">
    <div class="avatar"></div>
    <h1 class="big-title">HaoYu Li's Home</h1>
    <p class="comment">一名追逐创意的前端应用开发者</p>
    <about-me></about-me>
    <!-- <personal-works></personal-works> -->
    <!-- <note></note> -->
    <contact></contact>
  </div>
</template>

<script setup>
import AboutMe from "./aboutMe.vue";
import PersonalWorks from "./personalWorks.vue";
import Note from "./note.vue";
import Contact from "./contact.vue";
</script>

<style lang="less" scoped>
.container {
  .avatar {
    background-image: url(../../assets/logo.jpg);
    background-size: cover;
    height: 120px;
    width: 120px;
    border-radius: 5px;
    margin-bottom: 40px;
  }
  .avatar:hover {
    animation: yaohuang 1.5s ease;
  }
  @keyframes yaohuang {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(30deg);
    }
    50% {
      transform: rotate(-15deg);
    }
    75% {
      transform: rotate(15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}
</style>
