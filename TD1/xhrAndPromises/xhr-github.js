// 
// Récupération des repos d'un utilisateur de github
// 

/**
 * Envoie une requête XHR
 * @param {string} urlSend = URL ou route de l'API
 * @param {function} success = fonction à appeler en cas de succès
 * @return : inutilisable
 */
function sendXhr(urlSend,success){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',urlSend);
    xhr.responseType = 'json';
    xhr.send();
    // les données arrivent correctement
    xhr.addEventListener("load", function(response){
        success(response.target.response);
        //console.log(response.target.response);
    });

    // on a un code d'erreur
    xhr.addEventListener("error", function(response){
        console.log('erreur: ' + response);
    });
}

/**
 * Afficher les 30 utilisateurs puis envoie une seconde requête
 * @param {json} data : contient la réponse de l'API
 * @return : vide 
 */
 function showUsers(data){
    console.log(data);
    let divResultatUser = document.getElementById('resultatUsers');
    data.forEach(element => {
        divResultatUser.innerHTML += "<span> User: " + element.login + " UID: " + element.id + "</span><br>"
        divResultatUser.innerHTML += "<img src="+element.avatar_url+"><br>"
    });
    let h2Repos = document.getElementById('h2Repos');
    h2Repos.innerText = "Voici les repos de: " + data[1].login;
    let githubUrl2 = data[1].repos_url;
    sendXhr(githubUrl2, showRepos);
}

/**
 * Afficher les repos de l'utilisateur
 * @param {json} data : contient la réponse de l'API
 * @return : vide 
 */
 function showRepos(data){
    console.log(data);
    let divResultatRepos = document.getElementById('resultatRepos');
    data.forEach(element => {
        divResultatRepos.innerHTML += "<span> Repo: "+ element.name+"</span><br>"
    });
}
// -------------- Main

document.addEventListener("DOMContentLoaded", function(){
// On attend que le DOM soit chargé

// processus général
    let githubUrl1 = "https://api.github.com/users"
    console.log('API URL: ' + githubUrl1);

    sendXhr(githubUrl1, showUsers);
});