//Crea 5 objetos y almacénalos en un arreglo, debes hacer una función para filtrar a todas las personas 
//que tengan el nombre Luis y que esa misma función también muestre cuales son mayores de edad.



function ejercicioOcho(){
    const personas = [
        {
            nombre:"luis",
            apellido:"fernandez",
            edad: 11
        },
        {
            nombre:"luis",
            apellido:"Alvarez",
            edad: 17
        },
        {
            nombre:"Kiko",
            apellido:"perez",
            edad: 28
        },
        {
            nombre:"Ramon",
            apellido:"Martinez",
            edad: 22
        },
        {
            nombre:"luis",
            apellido:"Alvarez",
            edad: 12
        }
    ]
    console.log(personas);

    console.log("Personas que se llaman Luis")
    personas.filter((el)=>{
        if(el.nombre === "luis") console.log(`${el.nombre} ${el.apellido}`)
    });
    
    console.log("Personas mayores de edad");
    personas.filter((el)=>{
        if(el.edad>=18)console.log(`${el.nombre} ${el.apellido} - ${el.edad}`)
    });

    console.log('Personas con apellido Alvarez');
    personas.filter((el)=>{
        if(el.apellido === "Alvarez") console.log(`${el.nombre} ${el.apellido} - ${el.edad}`)
    });

    console.log('Personas menores de edad');
    personas.filter((el)=>{
        if(el.edad<18) console.log(`${el.nombre} ${el.apellido} - ${el.edad}`)
    })
}

ejercicioOcho()


