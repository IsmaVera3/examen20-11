function ej1(n){
    return new Promise((resolve,reject) =>{
        if(n>5){
            resolve(n);
        }else if(n<=5){
            reject(n)
        }
    } )    
}

ej1(2).then((res)=>console.log(console.log("Numero Aceptado: "+ res))).catch((error) => console.log(console.log("Numero reachazado: "+ error)));