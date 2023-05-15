//Hacer una función que filtre todos los números que sean múltiplos del 3 de un arreglo que contenga los números del 1 al 100.

function ejercicioCuatro(){
    let nums = [];
    let multiplos = []
    for(let i = 0; i <=100; i++ ){
        nums.push(i);

    }
    console.log(`Este es el arreglo principal ${nums}`);
    nums.filter((el)=>{
        if(el % 3 === 0) multiplos.push(el)
    });
    console.log (`Estos son los numeros multplos de 3: ${multiplos}`)
}

ejercicioCuatro()

