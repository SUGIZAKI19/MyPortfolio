<template>
<section id="home">
<div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024px"
    img-height="480px">
    <b-carousel-slide
      img-src="@/assets/no1.jpg"
      width="1024"
      height="480"
      caption="WELCOME to SUGIZAKI'S PAGE!"
    >
    </b-carousel-slide>
    <b-carousel-slide
      img-src="@/assets/no3.jpg"
      width="1024"
      height="480"
    >
    </b-carousel-slide>
  </b-carousel>
</div>

  <div class="speech_wrapper row">
      <div class="image col-md-5" style="text-align:center">
          <img src="@/assets/sugizaki.jpg" class="mt-5 my-md-5 mx-3">
      </div>
      <div class= "introduction px-4 py-4 col-md-7">
          <div class="subsection">
              <h3 class="border-bottom border-right border-light p-2 ">
                <v-fa icon="user-alt"/> Introduction
              </h3>
              <p>名前：  杉崎（すぎりぬ）
              <br>職業： ITエンジニア
              <br>趣味： DIY, 読書
              <br>特徴： 甘党,ツイ廃</p>
          </div>

          <div class="subsection py-1">
              <h3 class="border-bottom border-right border-light p-2">
                <v-fa icon="heart"/> Interest
              </h3>
              <p>フロントエンド：HTML, CSS
              <br>サーバーサイド： PHP, MySQL
              <br>フレームワーク： Laravel, Vue.js React.js
              </p>
          </div>
      </div>
      <button class="btn mb-3">
        <router-link
          to="/about"
          active-class="link--active"
          exact
          class="nav-link"
        >READ MORE!</router-link>
      </button>
  </div>
</section>

</template>

<style scoped>
#home {
    background-image: url('/src/assets/concrete.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-width:375px;
}


.carousel-caption{
    position: absolute;
    top:50%;
    transform:  translateY(-50%);
  }

.carousel-caption h1{
    color: #fff;
    max-width: 400px;
    text-align: center;
    padding-bottom: 10px;
    font-weight: lighter;
    border-bottom: medium solid #ffffff;
    font-size: 60px;
    letter-spacing: 7.5px;
    margin:auto;
}

.speech_wrapper{
  background:rgb(29,27,27);
  width:100%;
  margin:auto;
}

.introduction{
    color: #eee;
    text-align: left;
    margin-top: 10px;
}

.image img{
  border-radius:50%;
  width:270px;
}

.speech_wrapper .btn{
    width: 250px;
    height: 50px;
    text-align: center;
    display: block;
    background: #eee;
    border-radius: 25px;
    box-sizing: border-box;
    position: relative;
    -webkit-transition: all .3s;
    transition: all .3s;
    margin: auto;
}

.speech_wrapper .btn a{
    color: rgb(29,27,27);
    font-size:20px;
}

.speech_wrapper .btn:hover{
    background: #8f1313;
}
</style>
