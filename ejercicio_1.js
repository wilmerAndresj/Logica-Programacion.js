//Realizar una función que nos permita realizar las 4 operaciones aritméticas
//, es decir, que nos permita sumar, restar, dividir y multiplicar. 
//La función debe recibir 3 parámetros, dos de ellos deben ser los valores (a y b) 
//y uno el nombre de la operación (en minúsculas). 
//Si el parámetro de la operación no es válido que mande un error personalizado a la consola.

function  ejercicioUno(a, b, operation){
    switch(operation){
      case "suma":
        return console.log(a + b);
        break;
        
      case "resta":
        return console.log(a - b);
        break;
        
      case "multiplicacion":
        return console.log(a * b);
        break;
        
        case"dividir":
        return console.log(a / b);
        break;
      
        default:
        console.error(`La operacion ${operation} no es valida`)
    }
  }
  
  ejercicioUno(12, 86, "multiplicacion");