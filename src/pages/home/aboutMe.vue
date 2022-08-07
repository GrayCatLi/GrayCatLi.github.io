<template>
  <div class="about-me">
    <div class="img-container">
      <div>
        <h2>| 关于我</h2>
        <p>
          我是一名生活在杭州的 Web 开发者。2020 年毕业于计算机科学与技术专业。
        </p>
        <p>
          我热爱设计，无论是在我的作品还是我的生活空间，我都会努力让它们拥有最佳的体验。
        </p>
        <p>
          另外，我喜欢浏览并收藏那些别出心裁的网站，它们总能在我构思作品时激发我的灵感。
        </p>
      </div>
      <img
        src="../../assets/logo2.jpg"
        class="animate__animated animate__rollIn"
      />
    </div>
    <div class="text">
      <p>
        一直以来，我都专注于前端技术，并且坚持在做我喜欢的事情：构建令人赏心悦目的产品！
      </p>
      <p>在这里，你可以了解我的想法和创意，随便逛逛吧。</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.about-me {
  // display: flex;
  .text {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
      margin: 15px 0;
    }
  }
  .img-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      p {
        margin: 15px 0;
      }
      flex: 3;
      h2 {
        margin-bottom: 30px;
      }
    }
    img {
      width: 20%;
      height: 20%;
      border-radius: 15px;
      margin-left: 30px;
    }
  }
}
</style>
