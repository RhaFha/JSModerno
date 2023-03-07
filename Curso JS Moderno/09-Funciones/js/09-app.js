
const reproductor = {
    reproducir: function(id){
        console.log(`Rproduciendo canción con el id: ${id}`)
    },
    pausar: function(){
        console.log('pausando...');
    },
    borrar: function(id){
        console.log('Borrando cancion... ${id}');
    },
    craerPlayList: function(nombre){
        console.log('Creando la playlist de  ${nombre}');
    }

}

reproductor.reproducir(30);
reproductor.reproducir(50);
reproductor.pausar();

reproductor.borrar(30);
reproductor.craerPlayList('Moderato');