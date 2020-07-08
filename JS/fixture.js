$(document).ready(() => {
    //FUNCIONALIDAD APARICION DE CAJAS DE FIXTURE
    var apertura = $('#local');
    var sudamericana = $('#sudamericana');

    $('#mostra1').click(() => {
        apertura.fadeToggle('slow');
        sudamericana.hide('fast');
    });

    if (apertura.css({ display: 'none' })) {
        $('#mostra').click(() => {
            sudamericana.fadeToggle('slow');
            apertura.hide('fast');
        });
    }
    //BOTON SCROLL TOP
    var sube = document.querySelector('#sube');
    sube.click((e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false
    });
    //MENU NAV MEDIAQUERY
    var menu = $('#menu');
    var navegacion = $('#navega');
    menu.click(() => {

        navegacion.fadeToggle('slow');
    })
});