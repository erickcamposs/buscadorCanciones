import * as UI from './interfaz.js';
import API from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    UI.formulario.addEventListener('submit', buscarCancion);
});

function buscarCancion(e){
    e.preventDefault();

    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === ''){
        imprimirAlerta('Ambos campos son obligatorios');
        return;
    }

    //Consultar API
    const busqueda = new API(artista, cancion);
}

export function imprimirAlerta(mensaje){
    UI.divMensajes.textContent = mensaje;
    UI.divMensajes.classList.add('error');

    setTimeout(() => {
        UI.divMensajes.textContent = '';
        UI.divMensajes.classList.remove('error');
    }, 2000);
}