<template>
  <div class="container">
    <h1 class="title">HaoYu Li's Home</h1>
    <h3 class="comment">一名追逐创意的前端应用开发者</h3>
    <about-me class="about-me card"></about-me>
    <personal-works class="personal-works card"></personal-works>
    <note class="note card"></note>
    <contact class="contact card"></contact>
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
  margin: 150px 0;
  h1 {
    font-size: 50px;
    margin-bottom: 30px;
  }
  h3 {
    font-size: 20px;
    color: aqua;
    margin-bottom: 50px;
  }
  h2 {
    color: aqua;
  }
  p {
    font-size: large;
  }
  .card {
    box-shadow: 0 0 15px aqua;
    border-radius: 50px;
    margin-bottom: 30px;
    padding: 50px;
    transition: 0.3s;
    border: 1px solid aqua;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .card:hover {
    box-shadow: 0 0 5px aqua;
    transform: translateY(3px);
  }
}
</style>
