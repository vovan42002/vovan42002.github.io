$.ajax({
    url: "header.html",
    dataType: "html",
    success: function (response) {
        document.getElementById('header').innerHTML = response;
    }
});