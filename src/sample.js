$(document).ready(function () {
    $("#googleform").submit(function (event) {
        var email = $("#googleform input[name=email]").val();
        var name = $("#googleform input[name=name]").val();
        var title = $("#googleform input[name=title]").val();
        var message = $("#googleform input[name=message]").val();

 
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSevrHc1dp6pAWlKY2lsbj228e4We3DtyArUg-QBxbnByTau7A/formResponse",
            data: {
                "emailAddress": email,
                "entry.1535291678": name,
                "entry.2082001159": title,
                "entry.1953476654": message
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理
                    $("form").slideUp();
                    $('#success').slideDown();
                },
                200: function () {
                    //送信に失敗したときの処理
                    $("form").slideUp();
                    $('#error').slideDown();
                }
            }
        });
        event.preventDefault();
    });
});