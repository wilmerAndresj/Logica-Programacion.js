//Hacer una función que, dado como dato de entrada nuestra fecha de cumpleaños, 
//nos diga cuantos días faltan para el mismo.


function ejercicioSeis(a = "10 may 2023"){
    let cumple = new Date(a)
    let hoy = new Date();
    let diasRestantes = Math.floor((cumple.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
    console.log(`Tu cumpleaños es ${cumple} y faltan ${diasRestantes} dias`)

}
ejercicioSeis()