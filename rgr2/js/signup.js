$(".signup").on("submit", function (e) {
    const $email = $("input.input_login").val();
    const $password = $("input.input_password").val();
    const content = $email + ':' + $password;

    $.get("../files/secrets.txt", function (data) {
        let $lines = data.split("\n");
        const one = ($email + ':' + $password);
        let $isLogin = false;
        for (const pair of $lines) {
            if (pair.trim() === one.trim()) {
                $isLogin = true;
                $(".responseSignUp").html("Account exist!");
            }
        }
        if ($isLogin === false) {
            $.ajax({
                type: 'POST',
                url: "../php/writeToFile.php",
                data: { text: content },
                success: function (result) {
                    console.log("The data was successsfully sent to the server ");
                    $(".responseSignUp").html("Account register successfully!");
                },
                headers: {
                    "Access": "*/*"
                }
            })
        }
    })
});

