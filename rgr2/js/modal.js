$(function () {
    $.fn.showModal();
});

$.fn.showModal = () => {
    $("#myModal").css("display", "block");
    $("#img01").attr("src", $($(".myImg")).attr("src"));
    $("#caption").html($($(".myImg")).attr("alt"));

    $("span.close").on("dblclick", function () {
        $("#myModal").css("display", "none");
        setTimeout($.fn.showModal, 10 * 1000);
    })
}

