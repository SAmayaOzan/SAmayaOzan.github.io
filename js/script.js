const imagenes = [
    "imagenes/img1.jpg",
    "imagenes/img2.jpg",
    "imagenes/img3.jpg",
    "imagenes/img4.jpg",
    "imagenes/img5.jpg",
]
let contador = 0;

const imgPrincipal = document.getElementById("imagen-medio");



function mostrarImagen() {
   imgPrincipal.src  = imagenes[contador];
   // imagenes[contador].style.display = "block";
}


document.querySelector(".next").addEventListener("click", () => {
    contador++;
    if (contador >= imagenes.length) {
        contador = 0;   
    }
    mostrarImagen();
});


document.querySelector(".prev").addEventListener("click", () => {
    contador--;
    if (contador< 0) {
        contador = imagenes.length - 1; 
    }
    mostrarImagen();
    
});





    //validacion del programa


