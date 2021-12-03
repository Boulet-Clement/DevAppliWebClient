let promiseToCleanKitchen = new Promise ( function (resolve, reject){
    // Créer un événement dont la réponse arrive à un moment inconnu
    //...
    let isDone = true;

    if(isDone){
        resolve("Oui c'est fait")
    }else {
        reject("C'est pas fait")
    }
})

//----------------- MAIN

document.addEventListener("DOMContentLoaded", function (){

    promiseToCleanKitchen
    .then ( function(dataFromResolve){
        // effectuer le traitement de l'événement 
        console.log(dataFromResolve);
    })
    .catch ( function(dataFromReject){
        console.log(dataFromReject)
    })

})