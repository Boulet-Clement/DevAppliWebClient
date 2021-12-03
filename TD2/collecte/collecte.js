/**
 * @author : Clément Boulet
 * c.stan@moobee.fr
 * Exemple de chainage de promises
 */

/**
 * Collecter assez d'argent
 * @param : vide
 * @param : vide
 */
let promiseToCollectFund = new Promise ( (resolve,reject) => {
    // gestion de l'événement
    //...
    let isEnough = true;

    if(isEnough){
        resolve("Amount reached, ");
    }
    else{
        reject("Not enough money, ");
    }
})

/**
 * Acheter une console
 * @param : data {string} > données renvoyées par la promise précédente
 * @return : vide
 */

let buyConsole = data => {
    return new Promise ( (resolve,reject) => {
        // événement ...
        let consoleBought = true; 

        if (consoleBought){
            resolve(data + "I bought console ")
        }
        else{
            reject(data + "I couldn't buy console ")
        }
    })
}

/**
 * Jouer à Call Of Duty
 * @param : data {string} > données renvoyées par la promise précédente
 * @return : vide
 */

let playCOD = data => {
    return new Promise ( (resolve,reject) => {
        let didIplay = true;
        if (didIplay){
            resolve(data + "and I played COD")
        }
        else{
            reject(data + "then I didn't played COD")
        }
    })
}
//---------------------- MAIN
document.addEventListener("DOMContentLoaded", function (){

    promiseToCollectFund
    .then(message=>{return buyConsole(message)})
    .then(message=>{return playCOD(message)})
    .then(message=>console.log(message))
    .catch( errorMessage=> console.log(errorMessage))
})