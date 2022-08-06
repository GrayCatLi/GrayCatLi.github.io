<template>
  <div class="personal-works">
    <h2>| 个人作品</h2>
    <h3>我擅长把想法变为现实，始终将用户体验摆在第一位</h3>
    <div class="card-container">
      <div class="card" v-for="(item, idx) in data" :key="idx">
        <div
          class="img-container"
          :style="`background-image:url(${item.imgUrl})`"
        ></div>
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
    title: "echart",
    imgUrl:
      "https://www.leoku.top/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvue-color-avatar.7331d74f.png&w=2048&q=75",
    comment: "使用Echarts实现的数据可视化大屏",
  },
  personalWebsite: {
    title: "Personal-Website",
    imgUrl:
      "https://www.leoku.top/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvue-color-avatar.7331d74f.png&w=2048&q=75",
    comment:
      "基于Vue3+ElementPlus重构的vue-element-admin项目，后台管理项目的通用解决方案",
  },
  components: {
    title: "Components",
    imgUrl:
      "https://www.leoku.top/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvue-color-avatar.7331d74f.png&w=2048&q=75",
    comment: "使用HTML、CSS、JavaScript实现的一些有趣且炫酷的组件",
  },
});
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
      width: 46%;
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
        margin: 25px 15px 15px;
        height: 80px;
        line-height: 40px;
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
