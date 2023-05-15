//Realizar una tabla de multiplicación de un número (a) desde 0 hasta x, pero que no se muestre la multiplicación de a * 5.


function ejercicioTres(a = 0, x = 12){
    let result;
    for(let i = 0; i <= x; i++){
       result = a * i;
       if(i!== 5) console.log(`${a} X ${i} = ${result}`);
    }
}
ejercicioTres(2, 15)

      
