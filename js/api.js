import * as UI from './interfaz.js';
import {imprimirAlerta} from './app.js';

class API {
    constructor(artista, cancion){
        this.artista =artista;
        this.cancion = cancion;
        this.consultarAPI();
    }
    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then(resolve => resolve.json())
            .then(datos => {
                console.log(datos);
                if(datos.lyrics){
                    const {lyrics} = datos;
                    UI.heading.textContent =`${this.artista} - Canción - ${this.cancion}`;
                    UI.resultado.textContent = lyrics;
                }else{
                    UI.heading.textContent = ''
                    UI.resultado.textContent = '';
                    imprimirAlerta('Está canción no existe, prueba con otra búsqueda');
                }
            });
    }
}

export default API;

