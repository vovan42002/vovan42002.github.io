$(function () {
    $('body').prepend(
        $('<div><script src="js/inc_header.js"></script></div>').attr(
            {
                "id": 'header',
                "class": 'header'
            }
        )
    );

    $('#header').after(
        $('<section></section>')
    );

    $('section').prepend(
        $('<div></div>').attr(
            {
                'class': 'container-fluid content'
            }
        )
    );

    $('.content').prepend(
        $('<div></div>').attr(
            {
                'class': 'row p-0'
            }
        )
    );

    $('.content .row').prepend(
        $('<div></div>').attr(
            {
                'class': 'col-lg-12 popup'
            }
        )
    );

    $('.popup').prepend(
        $('<img>').attr(
            {
                'src': 'https://koda.gov.ua/wp-content/uploads/2022/03/1fc5f435c3b935ac.jpg',
                'class': 'img-thumbnail myImg',
                'alt': 'Вступай до ЗСУ!'
            }
        )
    );

    $('.popup').after(
        $('<div></div>').attr(
            {
                'id': 'myModal',
                'class': 'modal'
            }
        )
    );


    $('#myModal').prepend(
        $('<span>&times;</span>').attr(
            {
                'class': 'close'
            }
        )
    );

    $('span.close').after(
        $('<img>').attr(
            {
                'class': 'modal-content',
                'id': 'img01'
            }
        )
    );

    $('img#img01').after(
        $('<div></div>').attr(
            {
                'id': 'caption'
            }
        )
    );

    $('#myModal').after(
        $('<script></script>').attr(
            {
                'src': 'js/modal.js'
            }
        )
    )

    $('.content .row').append(
        $('<div></div>').attr(
            {
                'class': 'col-lg-12 popup'
            }
        )
    );

    $('section').after(
        $('<div><script src="js/inc_footer.js"></script></div>').attr(
            {
                'id': 'footer',
                'class': 'footer'
            }
        )
    )

})

