<template>
<div class="container" style="text-align: center">
    <h1 class="myName py-2 mt-5 mb-5">CONTACT</h1>

    <form
      action ="https://docs.google.com/forms/d/e/1FAIpQLSevrHc1dp6pAWlKY2lsbj228e4We3DtyArUg-QBxbnByTau7A/formResponse"
      id="form">
        <div class="cp_iptxt form-group">
            <label for="email" style="float:left; font-weight:bold;">
              E-mail
            </label>
            <input type="email" class="form-control" id="email" name="emailAddress" required>

        </div>
        <div class="cp_iptxt form-group">
            <label for="name" style="float:left; font-weight:bold;">
              Name
            </label>
            <input type="text" id="name" class="form-control" name="entry.1535291678"  required>
        </div>
        <div class="cp_iptxt form-group">
            <label for="title" style="float:left; font-weight:bold;">
              Title
            </label>
            <input type="text" id="title" class="form-control" name="entry.2082001159"  required>
        </div>

        <div class="cp_iptxt form-group" id ="comment">
            <label for="message" style="float:left; font-weight:bold;">
              Comments
            </label>
            <textarea name ="entry.1953476654" id="message" cols="30" rows="5"></textarea>
        </div>

        <button class="btn my-5" type="submit" id ="send_message" value="Send">
          SEND
        </button>
    </form>

    <div class="thanks-message">
        <h2 class="page">送信完了しました。ありがとうございました。</h2>
    </div>

    <div class="false-message">
        <h2 class="page">送信に失敗しました。ページを更新して再度送信してください。</h2>
    </div>

</div>
</template>

<script>


</script>

<style scoped>
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

.cp_iptxt {
	position: relative;
	width: 60%;
	margin: 40px auto;
}

#comment{
	position: relative;
	width: 60%;
	margin: auto;
	margin-top:40px;
	margin-bottom:0px;
}

.cp_iptxt input {
	font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 100%;
	padding: 0.3em;
	padding-left: 10px;
	letter-spacing: 1px;
	border: 0;
}


.cp_iptxt::after {
	display: block;
	width: 100%;
	height: 4px;
	margin-top: -1px;
	content: '';
	border-width: 0 1px 1px 1px;
	border-style: solid;
	border-color: #da3c41;
}

.cp_iptxt textarea{
  font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 100%;
	padding: 0.3em;
	padding-left: 40px;
	letter-spacing: 1px;
	border: 0;
}

button {
    width: 250px;
    height: 50px;
    text-align: center;
    display: block;
    background: rgb(29,27,27);
    color:#eee;
    border-radius: 25px;
    box-sizing: border-box;
    position: relative;
    -webkit-transition: all .3s;
    transition: all .3s;
    margin: auto;
}

button a{
    color: rgb(29,27,27);
    font-size:20px;
}

.btn:hover{
    background: #8f1313;
}


/*成功，エラーメッセージ*/
.thanks-message{
	display:none;
}

.false-message{
	display:none;
}

</style>
