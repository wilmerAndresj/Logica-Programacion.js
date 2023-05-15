//Realizar una función que almacene en un arreglo todos los números pares desde a hasta b.


function ejerciciodos(a = 0, b = 0){
let nums = [];
for(let i = a; i<=b; i++){
    if(i % 2 === 0) nums.push(i);
}
    console.log(nums);
}   
    

ejerciciodos(1,30);
