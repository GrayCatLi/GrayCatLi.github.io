<template>
  <div class="container">
    <div class="image-container1 card">
      <img src="../../assets/cat.jpg" class="img-cat" />
      <h3>你好呀！👋</h3>
      <div class="text-container">
        <p>
          很高兴遇见你，也欢迎来到我的个人主页， 我叫李昊雨，
          有一只可爱调皮的猫和一位同样可爱有趣的漂亮女友。
        </p>
        <p>
          在大学毕业后不久，我发现了很多能够让我感到快乐的事情，例如拍一张好看的照片，读一段很美的文字，尤其是用编程实现一些奇妙的小项目，这些都能让我获得很大的成就感和满足感。
        </p>
        <p>
          对于一些美好的文字和事物，我希望能够将他们记录下来，并且分享给大家，于是我创建了自己的个人主页。
        </p>
      </div>
    </div>
    <div class="img-container2 card">
      <img src="../../assets/img1.png" class="img1" />
      <div class="text-container">
        <p>得益于我对美好事物的憧憬和向往，我发现我的审美能力在不断的提高。</p>
        <p>
          在网页设计和交互设计的方面，我会有很多自己的创意和想法，这让我开发的网页通常效果拔群。
        </p>
        <p>
          渐渐的，我找到了自己的兴趣，开始在工作之余更深入的学习前端技术，尝试实现更为复杂的应用，尝试能够让自己的编程能力渐入佳境，持续进步。
        </p>
      </div>
    </div>
    <div class="img-container3 card">
      <img src="../../assets/img2.png" class="img2" />
      <div class="text-container">
        <p>
          除了编程，我最大的爱好是🏀 <br />
          祝贺库里所带领的勇士队夺得2022年NBA总冠军！
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.container {
  margin: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 100%;
    position: absolute;
    top: 0;
  }
  .img-cat {
    width: 50%;
    top: 10px;
    left: 5%;
    border-radius: 50%;
  }
  .img2 {
    top: -35px;
  }

  .card {
    width: 40%;
    border-radius: 10px;
    height: 70vh;
    margin: 0px 30px 50px;
    box-shadow: 0px 0px 20px aqua;
    transition: all 0.5s;
    overflow: hidden;
    display: flex;
    flex: wrap;
    position: relative;
    background-color: rgba(0, 0, 0, 0.5);
    h3 {
      color: aqua;
      position: absolute;
      top: 15%;
      right: 3%;
      font-size: 1.5em;
    }
    .text-container {
      position: absolute;
      bottom: 5px;
      padding: 20px;
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  .card:hover {
    transform: translateY(3px);
    box-shadow: 0px 0px 3px aqua;
  }
}
</style>
