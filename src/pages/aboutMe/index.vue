<template>
  <div class="container">
    <div class="image-container1 card">
      <img src="../../assets/cat.jpg" class="img-cat" />
      <h3>ä½ å¥½åï¼ð</h3>
      <div class="text-container">
        <p>
          å¾é«å´éè§ä½ ï¼ä¹æ¬¢è¿æ¥å°æçä¸ªäººä¸»é¡µï¼ æå«ææé¨ï¼
          æä¸åªå¯ç±è°ç®çç«åä¸ä½åæ ·å¯ç±æè¶£çæ¼äº®å¥³åã
        </p>
        <p>
          å¨å¤§å­¦æ¯ä¸åä¸ä¹ï¼æåç°äºå¾å¤è½å¤è®©ææå°å¿«ä¹çäºæï¼ä¾å¦æä¸å¼ å¥½ççç§çï¼è¯»ä¸æ®µå¾ç¾çæå­ï¼å°¤å¶æ¯ç¨ç¼ç¨å®ç°ä¸äºå¥å¦çå°é¡¹ç®ï¼è¿äºé½è½è®©æè·å¾å¾å¤§çæå°±æåæ»¡è¶³æã
        </p>
        <p>
          å¯¹äºä¸äºç¾å¥½çæå­åäºç©ï¼æå¸æè½å¤å°ä»ä»¬è®°å½ä¸æ¥ï¼å¹¶ä¸åäº«ç»å¤§å®¶ï¼äºæ¯æåå»ºäºèªå·±çä¸ªäººä¸»é¡µã
        </p>
      </div>
    </div>
    <div class="img-container2 card">
      <img src="../../assets/img1.png" class="img1" />
      <div class="text-container">
        <p>å¾çäºæå¯¹ç¾å¥½äºç©çæ§æ¬ååå¾ï¼æåç°æçå®¡ç¾è½åå¨ä¸æ­çæé«ã</p>
        <p>
          å¨ç½é¡µè®¾è®¡åäº¤äºè®¾è®¡çæ¹é¢ï¼æä¼æå¾å¤èªå·±çåæåæ³æ³ï¼è¿è®©æå¼åçç½é¡µéå¸¸æææç¾¤ã
        </p>
        <p>
          æ¸æ¸çï¼ææ¾å°äºèªå·±çå´è¶£ï¼å¼å§å¨å·¥ä½ä¹ä½æ´æ·±å¥çå­¦ä¹ åç«¯ææ¯ï¼å°è¯å®ç°æ´ä¸ºå¤æçåºç¨ï¼å°è¯è½å¤è®©èªå·±çç¼ç¨è½åæ¸å¥ä½³å¢ï¼æç»­è¿æ­¥ã
        </p>
      </div>
    </div>
    <div class="img-container3 card">
      <img src="../../assets/img2.png" class="img2" />
      <div class="text-container">
        <p>
          é¤äºç¼ç¨ï¼ææå¤§çç±å¥½æ¯ð <br />
          ç¥è´ºåºéæå¸¦é¢çåå£«éå¤ºå¾2022å¹´NBAæ»å åï¼
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
