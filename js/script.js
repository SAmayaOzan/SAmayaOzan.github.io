const imagenes = document.querySelectorAll("#imgs img");
let contador = 0;


function mostrarImagen() {
    imagenes.forEach(img => img.style.display = "none");
    imagenes[contador].style.display = "block";
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


mostrarImagen();
