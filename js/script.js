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





    //validacion del programa
document.addEventListener("DOMContentLoaded", function(){


    const form=document.querySelector(".contactForm");
    const resultado=document.getElementById("resultado");

    form.addEventListener("submit",function(event){
        event.preventDefault();

        
        const nombre=document.getElementById("nombre").value.trim();
        const email=document.getElementById("email").value.trim();
        const telefono= document.getElementById("telefono").value.trim();
        const curso=document.getElementById("curso").value;
        const mensaje=document.getElementById("mensaje").value.trim();

        const nombreRegex= /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{6,}$/;
        const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        const telefonoRegex=/^[0-9]{6,15}$/;

        resultado.innerHTML="";
        let errores=[];

        if(!nombreRegex.test(nombre)){
            errores.push("❌El nombre debe tener al menos 6 caracteres❌");
        }
        if(!emailRegex.test(email)) {
            errores.push("❌Ingrese un correo electronico valido.❌");
        }
        if (curso === "") {
            errores.push("❌Debe seleccionar una opcion de curso❌")
        }
        if (telefono !==""&&!telefonoRegex.test(telefono)) {
            errores.push("❌El telefono solo debe contener numeros❌");
        }

        if (errores.length > 0){
            resultado.style.color="red";
            errores.forEach(err=>{
                const p= document.createElement("p");
                p.textContent=err;
                resultado.appendChild(p);
            });
        }else{
            resultado.style.color="green";
            resultado.innerHTML= "";

            const exitoMsg=document.createElement("p");
            exitoMsg.innerHTML=`✅ Gracias <strong>${nombre}</strong>! Tu inscripción fue enviada correctamente.`;
            resultado.appendChild(exitoMsg);

            const datos= document.createElement("div");
            datos.style.marginTop="10px";
            datos.innerHTML= `
            <strong>DATOS ENVIADOS:</strong><br>
            📧 Email: ${email}<br>
            📞 Teléfono: ${telefono || "No ingresado"}<br>
            🎓 Curso: ${curso}<br>
            📝 Mensaje: ${mensaje || "Sin mensaje"}
            `;
            resultado.appendChild(datos);

            form.reset();
        }

    });

});

