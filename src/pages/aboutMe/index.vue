<template>
  <div class="container">
    <div class="avatar"></div>
    <div class="big-title">关于我</div>
    <div class="comment">一名追逐创意的前端应用开发者</div>
    <hr />
    <div>
      <p></p>
      <p>你好呀！👋</p>

      <p>
        很高兴遇见你，也欢迎来到我的个人主页， 我叫李昊雨，
        有一只可爱调皮的猫和一位同样可爱有趣的漂亮女友。
      </p>
      <p>
        在大学毕业后不久，我发现了很多能够让我感到快乐的事情，例如拍一张好看的照片，读一段很美的文字，尤其是用编程实现一些奇妙的小项目，这些都能让我获得很大的成就感和满足感，对于一些美好的文字和事物，我希望能够将他们记录下来，并且分享给大家，于是我创建了自己的个人主页。
      </p>
      <img src="../../assets/cat.jpg" class="img-cat" />
    </div>
    <hr />
    <div class="img-container">
      <p>得益于我对美好事物的憧憬和向往，我发现我的审美能力在不断的提高。</p>
      <p>
        在网页设计和交互设计的方面，我会有很多自己的创意和想法，这让我开发的网页通常效果拔群。
      </p>
      <p>
        渐渐的，我找到了自己的兴趣，开始在工作之余更深入的学习前端技术，尝试实现更为复杂的应用，尝试能够让自己的编程能力渐入佳境，持续进步。
      </p>
      <img src="../../assets/img1.png" class="img1" />
    </div>
    <hr />
    <div class="img-container">
      <img src="../../assets/img2.png" class="img2" />
      <p>
        除了编程，我最大的爱好是🏀，也再次祝贺库里所带领的勇士队夺得2022年NBA总冠军！
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  .avatar {
    background-image: url(https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f606.svg);
    background-size: cover;
    height: 120px;
    width: 120px;
    border-radius: 5px;
    margin-bottom: 40px;
    transition: all 0.5s ease-out;
  }
  .avatar:hover {
    transform: rotate(-30deg);
  }
  .big-title {
    font-size: 50px;
    margin-bottom: 20px;
  }
  hr {
    margin: 50px 0;
  }
  img {
    width: 200px;
    border-radius: 10px;
  }
  p {
    margin: 20px 0;
  }
  .img-container {
    justify-content: space-between;
  }
  p {
    flex: 1;
  }
  .img1 {
    flex: 3;
    margin-left: 20px;
  }
  .img2 {
    flex: 2;
    margin-right: 20px;
  }
}
</style>
