<template>
  <div class="container">
    <div class="avatar"></div>
    <div class="title-cotainer">
      <h1>关于本站</h1>
      <p class="comment">一个轻松但别出心裁地网站</p>
    </div>
    <hr />
    <div class="why-container">
      <h2>为什么建立这个网站</h2>
      <p>
        大学毕业后，我发现自己喜欢上了创作，在我完成一个作品后，我希望把我在创作时的想法和经历记录下来，因为它们对我来说弥足珍贵。当人们对我的作品感兴趣时，我可以向他们分享这些作品背后的故事。很长一段时间里，我都在计划打造一个网站来展示我和我的作品。
      </p>
      <p>
        偶然情况下，我在Github上得知了一位优秀的开发者
        <a href="https://www.joshwcomeau.com/">Josh W. Comeau</a>
      </p>
      <p>
        他介绍了作为一个软件开发者，应该如何编写自己的作品集网站，并为此写了一本可以免费获取的电子书——
        <a href="https://www.joshwcomeau.com/effective-portfolio"
          >Building an Effective Dev Portfolio</a
        >
      </p>

      <p>
        虽然本书的篇幅很短，但也着实给了我很大的启发。随即，我便开始着手构建自己的网站，十分推荐大家阅读它。
      </p>
    </div>
    <hr />
    <div class="how">
      <h2>如何制作</h2>
      <p>
        本站使用vite+vue进行开发，托管在vercel上。不得不说这些工具让我省下了很多的建站功夫，很赞！
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
    background-image: url(https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f44f.svg);
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
  p {
    margin: 20px 0;
  }
  hr {
    margin: 50px 0;
  }
  a {
    color: rgb(16, 226, 234);
  }
  h1 {
    font-size: 50px;
  }
}
</style>
