$("form").on("submit", function (e) {
    const $email = $("input#floatingInput").val();
    const $password = $("input:password").val();
    $.get("files/secrets.txt", function (data) {
        let lines = data.split("\n");
        let isLogin = false;
        const one = ($email + ':' + $password);
        for (const pair of lines) {
            if (pair.trim() === one.trim()) {
                isLogin = true;
            }
        }
        if (isLogin) {
            const url = "secret.html";
            $(location).attr('href', url);
        } else {
            $(".response").html("Login failed!");
        }
    });
    e.preventDefault();

});

