function delay(n){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(console.log("¡Espera completada!"));
        }, n);
    } ) 
}

delay(6000)
.then(() => console.log("Primera espera terminada"))
.then(() => delay(2000))
.then(() => console.log("Segunda espera terminada"))
.then(() => delay(4000))
.then(() => console.log( "Tercera espera terminada"))
.catch((error) => console.log(error));