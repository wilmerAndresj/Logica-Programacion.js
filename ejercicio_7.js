//Realizar una función que, dado como dato de entrada una oración, 
//nos devuelva un arreglo que contenga todas las palabras usadas en la oración.

function ejercicioSiete(text = "hola mundo"){
    let words = text.split(".");
    console.log(words)
}

ejercicioSiete("Te amo");
ejercicioSiete("Hola mundo. te Amo. te respeto. hablando desde colombia")
ejercicioSiete(" Wilmer. Andres. Jramillo. Loaiza")