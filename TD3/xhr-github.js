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
                if(user.id === uid){
                    resolve(user);
                }else{
                    reject("Cet ID n'existe pas");
                }
            }); 
        })
        .catch ( error => {
            reject(error);
        })
    })
}

/**
 * 
 * @param {*} user 
 * @returns : inutilisable
 */
let showUserInfo = (user) => {
    return new Promise( function(resolve,reject){
        if(user.repos_url){
            //AddUserInfoInHTML(user)
            resolve(user.repos_url);
        }
        else{
            reject("L'utilisateur n'a pas de lien de repos");
        }
    })
}

/**
 * Ici on va appeler l'api GITHUB et en fonction du resultat on appelera la fonction d'affichage
 * @param {string} userRepoLink 
 * @returns : vide
 */
let showUserRepos = (userRepoLink) => {
    sendXhrPromise(userRepoLink)
    .then ( repos => {
        //AddUserRepoInHTML(repos)
        console.log(response);
    })
    .catch ( error => {
        console.log(error)    
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
    .then ( (userRepoLink) => { 
        //On affiche le user repos
        showUserRepos(userRepoLink);
    })
    .catch ( (errorMessage) => { 
        console.log(errorMessage);
    })
}

// -------------- Main

document.addEventListener("DOMContentLoaded", function(){
// On attend que le DOM soit chargé

// processus général
    let user_id = 1;
    displayUserRepos(user_id)
})
