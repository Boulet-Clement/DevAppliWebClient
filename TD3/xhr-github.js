/**
 * @author : Clément Boulet 
 * @todo : Afficher les infos d'une user et tous ses repos à partir de son ID
 */

/*
    Notes on peut afficher un date dans un meilleurs format
*/
/**
 * Envoie une requête XHR
 * @param {string} urlSend = URL ou route de l'API
 * @param {function} success = fonction à appeler en cas de succès
 * @return : inutilisable
 */
 function sendXhrPromise(urlSend){
    return new Promise( function(resolve,reject){
        console.log("URL : "+ urlSend);
        let xhr = new XMLHttpRequest();
        xhr.open('GET',urlSend);
        xhr.responseType = 'json';
        xhr.send();
        // Les données arrivent correctement
        xhr.addEventListener('load', function(response){
            resolve(response.target.response);
        })
        // Erreur 
        xhr.addEventListener('error',function(response){
            reject('data transfert error : ' + response);
        })
    })
}
/**
 * On Recupere l'utilisateur que l'on souhaite
 * @param {int} uid 
 * @returns : inutilisable
 */
let getListUsers = (uid) => {
    return new Promise ( (resolve, reject) => {
        sendXhrPromise('https://api.github.com/users')
        .then ( response => {
            response.forEach(user => {
                if(user.uid === uid){
                    resolve(user);
                }else{
                    reject("Cet ID n'existe pas");
                }
            });
            
        })
        .catch ( error => {
            console.log("Erreur : pas d'accès au serveur" + error)
            reject(error);
        })
    })
}

/**
 * On affiche des repos d'un utilisateur
 * @param {int} user_id 
 * @return : vide
 */
let displayUserRepos = (user_id) => {
    getListUsers(user_id)
        .then ( (user) => { //Requete : liste des users
                //Afficher les infos du user
            return showUserInfo(user);
        })
        .then ( (userData) => { 
                //On affiche le user repos
            showUserRepos(userData);
        })
        .catch ( (errorMessage) => { 
            //Traiter le cas d'erreur

        })
}

// -------------- Main

document.addEventListener("DOMContentLoaded", function(){
// On attend que le DOM soit chargé

// processus général
    let user_id = 1;
    displayUserRepos(user_id)
})
