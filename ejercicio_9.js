//Realizar una función que nos diga la fecha de apertura de un examen de la universidad, 
//es decir, la cantidad de horas restantes que faltan para que abra dicho examen. 
//En caso de que el examen haya cerrado que nos retorne un mensaje que diga “El examen ya cerró”.


function ejercicioNueve(open = "", close = ""){
  if(open ==="" || close === "") return console.log('Faltan parametroos...');
  else{
    let today = new Date()
        testOpen = new Date(open),
        testClose = new Date(close);
    
        let resulTimeOpen = Math.floor((testClose.getTime () - testOpen.getTime()) / (1000 * 60));
        let resultTimeRest = Math.floor((testOpen.getTime() - testClose.getTime ()) / (1000 * 60)); 

        if (testClose.getTime() < today.getTime())return console.log('El examen ya cerro');
        else{
          if(resultTimeRest > 0) console.log(`Faltan ${resultTimeRest} minutos para que el examen abra`);
          else{
            console.log('El examen esta abierto..');
            console.log(`El examen durara abierto ${resulTimeOpen} minutos`)
          }

        }
        
      }
  
  }
  
  ejercicioNueve('2023 may 5 2023 19:00:00', '2023 may 5 2023 21:00:00')
    


        