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
            // Cette variable permet de traiter le cas où on entre un mauvais uid
            let userFinded = false;
            response.forEach(user => {
                if(user.id === uid){
                    userFinded = true;
                    resolve(user);
                } 
            }); 
            if(!userFinded){
                reject("Cet ID n'existe pas");
            }
        })
        .catch ( error => {
            console.log(error)
        })
    })
}

/**
 * On inscrit les données de l'utilisateur dans la div prévu à cet effet
 * @param {JSON} user 
 * @returns : vide
 */
let AddUserInfoInHTML = (user) => {
    let divResultatUser = document.getElementById('resultatUser');
        divResultatUser.innerHTML = "";
        htmlAsString = "<div class=\"col-6 text-center mt-4\"><h3> username : " + user.login + "</h3>";
        htmlAsString += "<h3> UID : " + user.id + "</h3></div>";
        htmlAsString += "<div class=\"col-6 text-center\"><img src="+user.avatar_url + " height=200px width=auto><br></div>";
        divResultatUser.innerHTML = htmlAsString;
}

let changeDateFormat = (dateAsString) => {
    let date = new Date(dateAsString);
    return date.toDateString();
}

/**
 * On remplit le tableau avec les différent repos
 * @param {JSON} repos 
 * @returns : inutilisable
 */
let AddUserRepoInHTML  = (repos) => {
    //Récupération du tableau
    let tbody = document.getElementById("tbodyId");
    tbody.innerHTML="";
    repos.forEach(repo => {
        //Ajout d'une ligne dans le tableau concernant les infos du repo
        let ajout = "";
        ajout+= "<tr>";
            ajout+= "<th scope=\"row\">" + repo.name + "</th>";
            ajout+= "<td><a href=\""+repo.html_url+"\">"+repo.html_url+"</a></td>";
            ajout+= "<td>"+changeDateFormat(repo.updated_at)+"</td>";
            ajout+= "<td>"+repo.description+"</td>";
            ajout+= "<td>"+repo.visibility+"</td>";
        ajout+="</tr>";
        tbody.innerHTML+= ajout;
    });
}

/**
 * Appel d'une fonction d'affichage des informations de l'utilisateur
 * @param {*} user 
 * @returns : inutilisable
 */
let showUserInfo = (user) => {
    return new Promise( function(resolve,reject){
        if(user.repos_url){
            AddUserInfoInHTML(user)
            resolve(user.repos_url);
        }
        else{
            reject("L'utilisateur n'a pas de lien de repos");
        }
    })
}

/**
 * Envoie d'une requete et en fonction du resultat on appelera la fonction d'affichage
 * @param {string} userRepoLink 
 * @returns : vide
 */
let showUserRepos = (userRepoLink) => {
    sendXhrPromise(userRepoLink)
    .then ( repos => {
        AddUserRepoInHTML(repos)
    })
    .catch ( error => {
        console.log(error)    
    })
}

/**
 * On affiche les repos d'un utilisateur
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

    let searchBtn = document.getElementById("button-addon2");
    let searchInput = document.getElementById("inputSearch");
    searchBtn.addEventListener("click", function(){
        displayUserRepos(parseInt(searchInput.value))
    })
})
