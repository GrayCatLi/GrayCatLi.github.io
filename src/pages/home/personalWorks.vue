<template>
  <div class="personal-works">
    <h2>| 个人作品</h2>
    <h3>我擅长把想法变为现实，始终将用户体验摆在第一位</h3>
    <div class="card-container">
      <div
        class="card"
        v-for="(item, idx) in data"
        :key="idx"
        @click="go(item.workUrl)"
      >
        <img :src="item.imgUrl" alt="" class="img-container" />
        <h3 class="title">{{ item.title }}</h3>
        <p class="comment">{{ item.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

const data = reactive({
  echart: {
    title: "Echarts",
    imgUrl: "https://w.wallhaven.cc/full/x8/wallhaven-x8rwzo.jpg",
    comment: "使用Echarts实现的数据可视化大屏",
    workUrl: "https://echarts-iota.vercel.app/",
  },
  personalWebsite: {
    title: "Background-Manage-System",
    imgUrl: "https://w.wallhaven.cc/full/rd/wallhaven-rd81d1.png",
    comment:
      "基于Vue3+ElementPlus重构的vue-element-admin项目，后台管理项目的通用解决方案",
    workUrl: "https://github.com/GrayCatLi/background-manage-system",
  },
  components: {
    title: "Components",
    imgUrl: "https://w.wallhaven.cc/full/3z/wallhaven-3zmr6y.jpg",
    comment: "使用HTML、CSS、JavaScript实现的一些有趣且炫酷的组件",
    workUrl: "https://github.com/GrayCatLi/Components.git",
  },
});

const go = (url) => {
  window.location.href = url;
};
</script>

<style lang="less" scoped>
.personal-works {
  h2 {
    margin-bottom: 50px;
  }
  h3 {
    margin-bottom: 40px;
  }
  .card-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .card {
      box-shadow: 0 0 10px aqua;
      width: 48%;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 50px;
      transition: all 0.5s;
      .img-container {
        width: 100%;
        height: 250px;
        background-position: center;
        background-size: cover;
      }
      .title {
        margin: 15px 15px;
        position: relative;
        transition: all 1s;
        padding: 0 0 15px;
        transition: all 0.5s;
        position: relative;
      }
      .title::after {
        content: "";
        width: 0px;
        height: 3px;
        background-color: aqua;
        position: absolute;
        z-index: 2;
        top: 40px;
        left: 0px;
        transition: all 0.5s;
      }

      .comment {
        margin: 15px 15px 15px;
        height: 60px;
        line-height: 20px;
        font-size: 0.9em;
      }
    }
    .card:hover {
      box-shadow: 0 0 5px aqua;
      transform: translateY(3px);
      cursor: pointer;
    }
    .card:hover .title::after {
      width: 80px;
    }
  }
}
</style>
