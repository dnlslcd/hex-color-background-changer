// Implementar solución aquí

// Una funcion para generar un color hexadecimal aleatorio:
function generateHexColor() {
    let numeroAleatorio = Math.floor(Math.random() * 16777215);
    // Convierte el número a formato hexadecimal y asegura que tenga 6 dígitos
    let numeroHexadecimal = numeroAleatorio.toString(16).padStart(6, '0');
    // Retorna el número hexadecimal generado
    return '#' + numeroHexadecimal;
}


function changeBG() {
    console.log("Se está recuperando el objeto del DOM");

// encapsular en una variable el generador de colores hexadecimales
    const randomHexColor = generateHexColor();

// asignar un color hex random al bkgd
    document.querySelector("body").style.backgroundColor = randomHexColor;

// asignar el mismo color hex aleatorio al span del texto en la web
    document.querySelector("#hexValue").textContent = randomHexColor;
}


const btn = document.querySelector("#btn");

// Una función que se va a encargar de gestionar el evento click
btn.onclick = changeBG, hexValueFunciona;