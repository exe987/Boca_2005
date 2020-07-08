$(document).ready(() => {
    //MENU NAV MEDIAQUERY
    var menu = $('#menu');
    var navegacion = $('#navega');
    menu.click(()=>{
        
        navegacion.fadeToggle('slow');
    });
    //BOTON SCROLL TOP
    var sube = document.querySelector('#sube');
    sube.click((e)=>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false
     });

}); 