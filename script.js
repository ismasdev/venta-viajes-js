// Importar elementos de otros archivo JS
import {barcelona, roma, paris, londres} from './ciudades.js'

// Obtener elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

console.log(enlaces)

// Agregar un evento CLICK a cada enlace

enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function () {
        // Remover activo
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        //Agregar la clase 'active' al enlace actual
        this.classList.add('active')

        // Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    //Mostrar el contenido del DOM
    });
});

//Funcion para traer la info correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    };
    return contenido[enlace];
}