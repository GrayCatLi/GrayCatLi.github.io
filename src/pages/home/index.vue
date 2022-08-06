<template>
  <div class="container">
    <div class="bg1">
      <!-- <div class="avatar"></div> -->
      <h1 class="title">HaoYu Li's Home</h1>
      <p class="comment">一名追逐创意的前端应用开发者</p>
      <about-me class="about-me"></about-me>
    </div>
    <personal-works class="personal-works"></personal-works>
    <note class="note"></note>
    <contact class="contact"></contact>
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
  .bg1 {
    margin-top: 60px;
    padding: 70px 350px 0px;
    background: url(../../assets/img1.png) no-repeat center;
    background-size: 100%;
    border-radius: 50px;
  }
  .title {
    margin-bottom: 20px;
    font-size: 50px;
  }
  .comment {
    margin-bottom: 20px;
  }
  .about-me {
    margin-bottom: 40px;
  }
  .personal-works {
    background-position: center;
    background-size: cover;
    background-image: url(https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Fnasa_robert_stewart_spacewalk_2.jpg?table=block&id=5aaf58f4-dacd-4e2d-bb05-568895f5053d&spaceId=c7919426-6ea8-41d1-bbac-46cfb77b1837&width=2000&userId=e1e8d6d7-6013-4794-a823-0b95c8b41053&cache=v2);
    border-radius: 50px;
    margin-bottom: 20px;
    padding: 20px 350px 0;
    height: 100vh;
  }
  .note {
    background-position: center;
    background-size: cover;
    background-image: url(https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Fnasa_space_shuttle_columbia.jpg?table=block&id=5aaf58f4-dacd-4e2d-bb05-568895f5053d&spaceId=c7919426-6ea8-41d1-bbac-46cfb77b1837&width=2000&userId=e1e8d6d7-6013-4794-a823-0b95c8b41053&cache=v2);
    border-radius: 50px;
    margin-bottom: 20px;
    padding: 20px 350px 0;
    height: 100vh;
  }
  .contact {
    background-position: center;
    background-size: cover;
    background-image: url(https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Fwebb2.jpg?table=block&id=5aaf58f4-dacd-4e2d-bb05-568895f5053d&spaceId=c7919426-6ea8-41d1-bbac-46cfb77b1837&width=2000&userId=e1e8d6d7-6013-4794-a823-0b95c8b41053&cache=v2);
    border-radius: 50px;
    margin-bottom: 20px;
    padding: 70px 350px 0;
    height: 50vh;
  }
}
</style>
