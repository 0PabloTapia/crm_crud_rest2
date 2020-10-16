import { mostrarAlerta } from './funciones.js';

(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

       if( nombre === '' || email === '' || telefono === '' || empresa === '') {
           mostrarAlerta('todos los campos obligatorios')
       } else {
           console.log('validación exitosa')
       }
    }


})();