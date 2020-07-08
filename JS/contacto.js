$(document).ready(() => {
    //MENU NAV MEDIAQUERY
    var menu = $('#menu');
    var navegacion = $('#navega');
    menu.click(() => {
        navegacion.fadeToggle('slow');
    });
    //VALIDACION DE FORMULARIO
    var formulario = document.querySelector('#form');
    var nombre;
    var mail;
    var telefono;

    //MANDAR LOS DATOS AL LOCAL STORAGE
    if (typeof (Storage) !== 'undefined') {
        console.log('LocalStorage disponible');
    } else {
        console.log('LocalStorage incompatible');
    };

    formulario.addEventListener('submit', () => {
        nombre = document.querySelector('#name').value;
        mail = document.querySelector('#mail').value;
        telefono = parseInt(document.querySelector('#telefono').value);

        var error = document.querySelector('#error');
        var error1 = document.querySelector('#error1');
        var error2 = document.querySelector('#error2');

        if (nombre.trim() == '' || nombre.trim().lenght == 0) {
            error.style.display = 'block';
            return false
        } else {
            error.style.display = 'none';
            //GUARDAMOS EN EL LOCAL STORAGE
            localStorage.setItem('IngresoNombreUsuario', nombre);
        };
        if (mail.trim() == '' || mail.trim().lenght == 0) {
            error1.style.display = 'block';
            return false
        } else {
            error1.style.display = 'none';
            //GUARDAMOS EN EL LOCAL STORAGE
            localStorage.setItem('IngresoMailUsuario', mail);
        };
        if (telefono == '' || telefono <= 0 || isNaN(telefono)) {
            error2.style.display = 'block';
            return false
        } else {
            error2.style.display = 'none';
            //GUARDAMOS EN EL LOCAL STORAGE
            localStorage.setItem('IngresoTelefonoUsuario', telefono);
        };

        //MOSTRAMOS LOS DATOS DEL USUARIO EN UN ALERT
        //LOS DATOS LOS TRAEMOS DESDE EL LOCAL STORAGE
        var nombreLocal = localStorage.getItem('IngresoNombreUsuario');
        var mailLocal = localStorage.getItem('IngresoMailUsuario');
        var telefonoLocal = localStorage.getItem('IngresoTelefonoUsuario');
        alert('Tu nombre es: '+nombreLocal+'\n'+
        'Tu E-mail es: '+ mailLocal + '\n'+
        'Tu telefono es: '+ telefonoLocal);

    });
    //BOTON SCROLL TOP
    var sube = document.querySelector('#sube');
    sube.click((e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false
    });

}); 