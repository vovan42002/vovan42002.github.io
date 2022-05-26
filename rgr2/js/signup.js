$("form").on("submit", function (e) {
    const $email = $("input.input_login").val();
    const $password = $("input.input_password").val();

    // write to js file
    //  const fs = require('fs')

    const content = $email + ':' + $password;

    const fs = require('fs');
    try {
        fs.writeFileSync("files/secrets.txt", content);
        // file written successfully
    } catch (err) {
        console.error(err);
    }
    /*
        fs.writeFile('/Users/joe/test.txt', content, err => {
            if (err) {
                console.error(err)
                return
            }
            //file written successfully
        })
    
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
                alert("Login successful!");
            } else {
                alert("Login failed!");
            }
        });*/
});

