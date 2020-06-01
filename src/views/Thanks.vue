<template>
<div>
  <div class="my-5 p-5 row">
    <img class="image col-md-5"
         src="@/assets/succeed.png"
    >
    <div class="message col-md-7 pb-5">
      <h2 class="border-bottom py-3" style="color:rgb(62,154,144);">
        Thank you for your message !
      </h2>
      <p>ご記入いただいた内容は無事送信されました．<br>
      またのご連絡をお待ちしております．
      </p>

      <b-button href="/"
        class="mt-5"
        style="float:right; background:rgb(62,154,144);">
      Back to Home <v-fa icon="arrow-circle-right"/></b-button>
    </div>
  </div>
  <div class="links mb-5 p-5">

  </div>
</div>
</template>

<script>


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;700&display=swap');

h2{
font-family: 'Dosis', sans-serif;
font-size:31px;
}

img{
  max-width:300px;
  margin:auto;
}

.links{
  text-align:center;
}

</style>
