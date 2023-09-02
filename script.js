$(document).ready(function() {

    $('.buttons').fadeIn(2000);

    $('.menu-hamburguer').click(function() {
        $('.menu-hamburguer').hide();
        $('.x').show(500);
        $('ul').fadeIn();
    });

    $('.x').click(function() {
        $('.x').hide();
        $('.menu-hamburguer').show(500);
        $('ul').hide();
    })

    $('#inicio').click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })

    
})