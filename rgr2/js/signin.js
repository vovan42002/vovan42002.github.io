$("form").on("submit", function (e) {
    const $email = $("input#floatingInput").val();
    const $password = $("input:password").val();


    $.get("../files/secrets.txt", function (data) {
        let $lines = data.split("\n");
        const $one = ($email + ':' + $password);
        let $isLogin = false;
        for (const $pair of $lines) {
            if ($pair.trim() === $one.trim()) {
                $isLogin = true;
                const $url = "../../secret.html";
                $(location).attr('href', $url);
            }
        }
        if ($isLogin === false)
            $(".response").html("Login failed!");
    })

    e.preventDefault();
});
