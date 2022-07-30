<template>
  <div class="container">
    <div class="avtor"></div>
    <h1 class="big-title">HaoYu Li's Home</h1>
    <div class="about-me">
      <h2 class="middle-title">| 关于我</h2>
      <p>我是一名生活在杭州的 Web 开发者。2020 年毕业于计算机科学与技术专业。</p>
      <p>
        我热爱设计，无论是在我的作品还是我的生活空间，我都会努力让它们拥有最佳的体验。另外，我喜欢浏览并收藏那些别出心裁的网站，
        <br />它们总能在我构思作品时激发我的灵感。
      </p>
      <p>一直以来，我都专注于前端技术，并且坚持在做我喜欢的事情：构建令人赏心悦目的产品！</p>
      <p>在这里，你可以了解我的想法和创意，随便逛逛吧。</p>
    </div>
    <div class="personal-works">
      <h2 class="middle-title">| 个人作品</h2>
    </div>
    <div class="contact">
      <h2 class="middle-title">| 与我联系</h2>
      <ul>
        <li>邮箱：lhyforwork@163.com</li>
        <li>微信：liHaoYu_66</li>
        <li>
          其他可以找到我的地方：
          <a href="https://github.com/GrayCatLi">[Github]</a>
          <a href="https://gitee.com/graycat-li">[Gitee]</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.container {
  .avtor {
    background-image: url(../../assets/logo.jpg);
    background-size: cover;
    height: 120px;
    width: 120px;
    border-radius: 5px;
    margin-left: 40px;
    margin-bottom: 40px;
    transition: all 0.5s ease-out;
  }
  .avtor:hover {
    transform: rotate(-30deg);
  }
  .big-title {
    font-size: 50px;
    margin-bottom: 20px;
  }
  .middle-title {
    font-size: 25px;
    padding: 20px 0;
  }
  p {
    font-size: 16px;
    padding: 15px;
  }
  ul {
    padding-left: 30px;
    li {
      padding: 15px 0;
      a {
        color: #ccc;
        padding-left: 15px;
      }
    }
  }
}
</style>
