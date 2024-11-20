function multiplyByThree(n){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(n*3);
        }, 2000);
    } )    
}

function addFive(n){
    return new Promise((resolve,reject) =>{
        resolve(console.log(n+5));
    } )  
}

multiplyByThree(5)
.then((res)=>addFive(res))
.catch((error) => console.log(error));