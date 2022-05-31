$.ajax({
    url: "../html/footer.html",
    dataType: "html",
    success: function (response) {
        $('#footer').html(response);
    }
});