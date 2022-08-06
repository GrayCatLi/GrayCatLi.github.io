<template>
  <div class="container">
    <div class="card">
      <div class="title-cotainer">
        <h1>关于本站</h1>
        <h3 class="comment">一个轻松但别出心裁地网站</h3>
      </div>
      <div class="why-container">
        <h2>| 为什么建立这个网站</h2>
        <p>
          大学毕业后，我发现自己喜欢上了创作，在我完成一个作品后，我希望把我在创作时的想法和经历记录下来，因为它们对我来说弥足珍贵。当人们对我的作品感兴趣时，我可以向他们分享这些作品背后的故事。很长一段时间里，我都在计划打造一个网站来展示我和我的作品。
        </p>
        <p>
          偶然情况下，我在Github上得知了一位优秀的开发者
          <a href="https://www.joshwcomeau.com/">[Josh W. Comeau]</a>
        </p>

        <div class="img-cotainer">
          <img
            src="https://www.leoku.top/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftweet.967f1cd2.png&w=2048&q=75"
            alt=""
          />
        </div>

        <p>
          他介绍了作为一个软件开发者，应该如何编写自己的作品集网站，并为此写了一本可以免费获取的电子书
          ——
          <a href="https://www.joshwcomeau.com/effective-portfolio"
            >[Building an Effective Dev Portfolio]</a
          >
        </p>

        <p>
          在阅读完之后，我了解到构建一个作品集网站的诸多细节，这给我带来了巨大的启发。如果你也在构思自己的网站，我十分推荐你阅读它！
        </p>
        <p>
          之后，我便着手开始构建现在这个网站。到目前为止，我对这个网站还挺满意的。随着我职业的发展，它将逐步丰富起来。
        </p>
      </div>
      <div class="design">
        <h2>| 风格与设计</h2>
        <p>
          我有一个爱好，喜欢在 GitHub
          里查看别人的主页，如果上面附带了个人网站的链接，我通常都会点进去浏览一番。如果我发现一些富有创意的网站，我会收藏它们。对我来说，这个过程就像是在寻宝，充满了惊喜！
        </p>
        <p></p>
      </div>
      <div class="how">
        <h2>| 开发与制作</h2>
        <p>
          本站使用vite+vue3进行开发，托管在vercel上。不得不说这些工具让我省下了很多的建站功夫，很赞！
        </p>
      </div>
      <div class="kaiyuan">
        <h2>| 是否开源</h2>
        <p>
          暂时还没有。
          由于网站中包含了一些个人的隐私信息，目前还不是很方便开源。不过，
          我会在合适的时候考虑开源。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  margin: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: aqua;
  }
}
.card {
  padding: 50px 80px;
  border-radius: 10px;
  box-shadow: 0 0 20px aqua;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  h2 {
    font-size: 30px;
  }
  p {
    margin: 50px 0;
  }
  a {
    color: aqua;
  }
  h1 {
    font-size: 50px;
  }
  .title-cotainer {
    h3 {
      margin-top: 20px;
      margin-bottom: 50px;
      color: aqua;
      font-size: 20px;
    }
    margin-bottom: 30px;
  }
  .why-container {
    margin-bottom: 30px;
    .img-cotainer {
      width: 100%;
      text-align: center;
      img {
        width: 50%;
      }
    }
  }
}
.card:hover {
  transform: translateY(3px);
  box-shadow: 0 0 5px aqua;
}
</style>
