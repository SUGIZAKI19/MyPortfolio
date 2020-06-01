<template>
<div class= "profile_wrapper">
    <h1 class="myName py-2 mt-5 mb-5">PROFILE</h1>
    <div class="profile_container">
        <div class="cont_l">
            <div class="title_m">
                <h2>ABOUT ME</h2>
            </div>
            <div class="biography_set row ">
                <div class="biography_image col-md-4">
                <img src="@/assets/sugizaki.jpg" class="py-2 py-md-5" style ="width:200px; border-radius:50%">
                </div>
                <div class="biography_text col-md-8 mt-4 px-2">
                    <dl class="list_set p-3">
                        <dt class="list_label">NAME</dt>
                        <dd>すぎちゃん，杉さん</dd>
                    </dl>
                    <dl class="list_set p-3">
                        <dt class="list_label">Birthplace</dt>
                        <dd>大阪府大阪市</dd>
                    </dl>
                    <dl class="list_set p-3">
                        <dt class="list_label">Birthday</dt>
                        <dd>1996年3月30日</dd>
                    </dl>
                    <dl class="list_set p-3">
                        <dt class="list_label">Hobby</dt>
                        <dd>DIY, プログラミング，英会話</dd>
                    </dl>
                    <dl class="list_set p-3">
                        <dt class="list_label">Likes</dt>
                        <dd>チョコミント, トッポギ(チーズ味)</dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="cont_l">
            <div class="title_m">
              <h2>HISTORY</h2>
            </div>
            <dl class="list_set p-4">
                <dt class="list_label">2018年 3月</dt>
                <dd>ついったランド入国</dd>
            </dl>
            <dl class="list_set p-4">
                <dt class="list_label">2020年 1月</dt>
                <dd>ブログ設立</dd>
            </dl>
        </div>

        <div class="cont_l">
            <div class="title_m">
              <h2> CODING</h2>
            </div>
            <dl class="list_set p-4 row">
                <dt class="list_label col-2" style="margin-right:0px;">
                  <v-fa :icon="['fab', 'bootstrap']" size ="3x"/>
                </dt>
                <dd class="col-10" style="padding:0px">
                  <b-progress height="3rem" variant="success" id="Bootstrap">
                    <b-progress-bar :value="85">
                    <strong>85 / 100</strong>
                    </b-progress-bar>
                  </b-progress>
                  <b-popover target="Bootstrap" triggers="hover" placement="topright">
                    <template v-slot:title>Bootstrap</template>
                      公式リファレンスを参照しながらだと自由自在に使用可能
                  </b-popover>
                </dd>
            </dl>
            <dl class="list_set p-4 row">
                <dt class="list_label col-2" style="margin-right:0px;">
                  <v-fa :icon="['fab', 'vuejs']" size ="3x"/>
                </dt>
                <dd class="col-10" style="padding:0px">
                  <b-progress :max="max" height="3rem" variant="warning" id="vue">
                    <b-progress-bar :value="50">
                    <strong>50 / 100</strong>
                    </b-progress-bar>
                  </b-progress>
                  <b-popover target="vue" triggers="hover" placement="righttop">
                    <template v-slot:title>Vue.js</template>
                      vue.cliでweb開発ができる程度
                  </b-popover>
                </dd>
            </dl>

            <dl class="list_set p-4 row">
                <dt class="list_label col-2" style="margin-right:0px;">
                  <v-fa :icon="['fab', 'git']" size ="3x"/>
                </dt>
                <dd class="col-10" style="padding:0px">
                  <b-progress :max="max" height="3rem" variant="warning" id="git">
                    <b-progress-bar :value="45">
                      <strong>45 / 100</strong>
                      </b-progress-bar>
                    </b-progress>
                    <b-popover target="git" triggers="hover" placement="left">
                      <template v-slot:title>Git</template>
                        OJTにてGIT練習中！
                    </b-popover>
                </dd>
            </dl>


            <dl class="list_set p-4 row">
                <dt class="list_label col-2" style="margin-right:0px;">
                  <v-fa :icon="['fab', 'php']" size ="3x"/>
                </dt>
                <dd class="col-10" style="padding:0px">
                  <b-progress :max="max" height="3rem" variant="danger" id="php">
                    <b-progress-bar :value="30">
                      <strong>30 / 100</strong>
                      </b-progress-bar>
                    </b-progress>
                    <b-popover target="php" triggers="hover" placement="left">
                      <template v-slot:title>PHP</template>
                        全力勉強中！伸びしろの塊！
                    </b-popover>
                </dd>
            </dl>

            <dl class="list_set p-4 row">
                <dt class="list_label col-2" style="margin-right:0px;">
                  <v-fa :icon="['fab', 'laravel']" size ="3x"/>
                </dt>
                <dd class="col-10" style="padding:0px">
                  <b-progress :max="max" height="3rem" variant="danger" id="laravel">
                    <b-progress-bar :value="25">
                      <strong>25 / 100</strong>
                      </b-progress-bar>
                    </b-progress>
                    <b-popover target="laravel" triggers="hover" placement="left">
                      <template v-slot:title>Laravel</template>
                        全力勉強中！伸びしろの塊！
                    </b-popover>
                </dd>
            </dl>

        </div>
    </div>
</div>

</template>

<style scoped>
.cont_l {
    margin-bottom: 30px;
}

.profile_wrapper{
    min-width: 375px;
    background: rgba(255,255,255,0.7);
    margin:auto;
}

.profile_container{
    margin:20px;
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
    border-left:solid 15px #8f1313;
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
