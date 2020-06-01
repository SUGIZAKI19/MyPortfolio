<template>
<div class="container">
    <h1 class="myName py-2 mt-5 mb-5">MY WORKS</h1>

    <div>
      <b-tabs content-class="mt-5" align="left">
        <b-tab title="CODE" active>
          <ul class="container">
              <li class ="mt-3" style="list-style:none;">
                <b-card no-body class="over flow-hidden">
                  <b-row no-gutters>
                    <b-col md="5">
                      <b-card-img src="@/assets/no1.jpg" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="7">
                      <b-card-body title="ポートフォリオサイト" >
                        <b-card-text>
                          就活の時のポートフォリオをVue.jsで改造しました！快適インターネット！
                        </b-card-text>
                      </b-card-body>
                      <b-button href="/" variant="warning" class="mx-3 my-4 my-md-0" style="float:right;">
                      Details <v-fa icon="arrow-circle-right"/></b-button>

                    </b-col>
                  </b-row>
                </b-card>
              </li>

            <li class ="mt-3" style="list-style:none;">
              <b-card no-body class="over flow-hidden">
                <b-row no-gutters>
                  <b-col md="5">
                    <b-card-img src="@/assets/no2.jpg" alt="Image" class="rounded-0"></b-card-img>
                  </b-col>
                  <b-col md="7">
                    <b-card-body title="アルコール感受性診断アプリ" >
                      <b-card-text>
                        東大式ＡＬＤＨ２表現型スクリーニングテストを基に作りました．<br>
                      </b-card-text>
                    </b-card-body>
                    <b-button href="https://alcohol-test.netlify.app/" variant="warning" class="mx-3 my-4 my-md-0" style="float:right;">
                    Details <v-fa icon="arrow-circle-right"/></b-button>
                  </b-col>
                </b-row>
              </b-card>
            </li>

            <li class ="mt-3" style="list-style:none;">
              <b-card no-body class="over flow-hidden">
                <b-row no-gutters>
                  <b-col md="5">
                    <b-card-img src="@/assets/no3.jpg" alt="Image" class="rounded-0"></b-card-img>
                  </b-col>
                  <b-col md="7">
                    <b-card-body title="ブログ" >
                      <b-card-text>
                        ブログではプログラミングや節約のことを主に発信しています！
                      </b-card-text>
                    </b-card-body>
                    <b-button href="https://sugizaki.work/" variant="warning" class="mx-3 my-4 my-md-0" style="float:right;">
                    Details <v-fa icon="arrow-circle-right"/></b-button>
                  </b-col>
                </b-row>
              </b-card>
            </li>

          </ul>
        </b-tab>
        <b-tab title="THESIS">
          <ul class="container">
            <li class ="mt-3" style="list-style:none;">
              <b-card no-body class="over flow-hidden">
                <b-row no-gutters>
                  <b-col md="5">
                    <b-card-img src="@/assets/no4.jpg" alt="Image" class="rounded-0"></b-card-img>
                  </b-col>
                  <b-col md="7">
                    <b-card-body title="重低音聴取時の脳活動" >
                      <b-card-text>
                        自分の研究です
                      </b-card-text>
                    </b-card-body>
                    <b-button href="https://alcohol-test.netlify.app/" variant="warning" class="mx-3 my-4 my-md-0" style="float:right;">
                    Details <v-fa icon="arrow-circle-right"/></b-button>
                  </b-col>
                </b-row>
              </b-card>
            </li>
          </ul>
        </b-tab>
      </b-tabs>
    </div>
</div>
</template>

<style scoped>
.container{
  min-height:600px;
}


/*名前(h1)見出し*/
.myName {
    position: relative;
    margin-bottom: 10px;
    padding: 10px 0 10px 0;
    font-size: 50px;
    font-weight: bold;
    color: rgb(29, 27, 27);
    text-align: center;
}

.myName:before {
    content: '';
    position: absolute;
    bottom: 0px;
    display: inline-block;
    width: 60px;
    height: 5px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color:rgb(29, 27, 27);
    border-radius: 2px;
  }



.title_m {
    position: relative;
    margin-bottom: 10px;
    padding: 5px 0 5px 0;
    font-size: 1.8rem;
    font-weight: bold;
    color:#eee;
    background: rgb(29, 27, 27);
    border-left:solid 5px #8f1313;
}

.title_m h2{

    margin-left:15px;
}

.biography_image {
    text-align: center;
}


/*プロフィール項目 罫線の設定*/
.line_set li {
    margin-bottom: 5px;
    padding: 5px;
    border-bottom: 1px solid #eee;
}

/*略歴の書式設定*/
.list_set {
    display: flex;
    margin-bottom: 5px;
    padding: 5px;
    border-bottom: 1px solid #eee;
}

.list_label {
    min-width: auto;
    margin-right: 20px;
    margin-bottom: 5px;
    color: #999;
}

/*slide_botton*/
#movetop {
    display: none;
    position: fixed;
    right: 10px;
    bottom: 20px;
    z-index: 50;
}

#movetop a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 2.0rem;
    color: #fff;
    text-decoration: none;
    line-height: 1.5;
    text-align: center;
    border-radius: 50%;
    background: rgb(29,27,27);
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.1);
}




</style>
