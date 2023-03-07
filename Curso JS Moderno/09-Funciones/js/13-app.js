const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Rproduciendo canción con el id: ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log('Borrando cancion... ${id}'),
    craerPlayList: nombre => console.log('Creando la playlist de  ${nombre}'),
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(50);
reproductor.pausar();

reproductor.borrar(30);
reproductor.craerPlayList('Moderato');