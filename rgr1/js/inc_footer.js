jQuery.ajax({
    url: "footer.html",
    dataType: "html",
    success: function (response) {
        document.getElementById('footer').innerHTML = response;
    }
});