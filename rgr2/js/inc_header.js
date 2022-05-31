$.ajax({
    url: "../html/header.html",
    dataType: "html",
    success: function (response) {
        $('#header').html(response);
    }
});