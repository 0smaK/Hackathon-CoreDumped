//Si haces scroll 700px, se cambiaran colores y se mostrara el boton de subir

$(window).scroll(function () {
    if ($(document).scrollTop() > 700) {
        $('#menu').addClass('grey');
        $('#menu').addClass('lighten-5');
        $('#menu').removeClass('transparent');
        $('.brand-logo').addClass('texto-negro');
        $('ul li a').addClass('texto-negro');
        $('#subir').removeClass('hide');

    } else {
        $('#menu').removeClass('grey');
        $('#menu').removeClass('lighten-5');
        $('#menu').addClass('transparent');
        $('.brand-logo').removeClass('texto-negro');
        $('ul li a').removeClass('texto-negro');
        $('#subir').addClass('hide');
    }
});
