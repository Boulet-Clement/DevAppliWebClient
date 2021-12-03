// 
// Affichage de la méteo avec OpenWeatherMap
// 

/**
 * Envoie une requête XHR à l'aide d'un promise
 * @param {string} urlSend = URL ou route de l'API
 * @param {function} success = fonction à appeler en cas de succès
 * @return : inutilisable
 */
function sendXhrPromise(urlSend){
    return new Promise( function(resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET',urlSend);
        xhr.responseType = 'json';
        xhr.send();
        xhr.addEventListener('load', function(response){
            resolve(response.target.response);
        })
        xhr.addEventListener('error',function(response){
            reject('data transfert error : ' + response);
        })
    })
}

/**
 * Afficher les données météo d'une ville
 * @param {json} data : contient la réponse de l'API
 * @return : vide 
 */
function showWeatherData(data){
    temperature = ('température: ' + data.main.temp);
    humidite = ('humidité: ' + data.main.humidity);
    tendance = ('tendance: ' + data.weather[0].description);
    pression = ('pression: ' + data.main.pressure);
    affichageMeteo(temperature,humidite,tendance,pression);
}
/**
 * Affichage des données sur la page html
 * @param {string} temperature 
 * @param {string} humidite 
 * @param {string} tendance 
 * @param {string} pression 
 * @return : vide
 */
function affichageMeteo(temperature,humidite,tendance,pression){
    let spanTemperature = document.getElementById('temperature');
    let spanHumidite = document.getElementById('humidite');
    let spanTendance = document.getElementById('tendance');
    let spanPression = document.getElementById('pression');
    let divInfosRecupDonnees = document.getElementById('infosRecupDonnees');
    divInfosRecupDonnees.style.display = "none";
    spanTemperature.innerText = temperature;
    spanHumidite.innerText = humidite;
    spanTendance.innerText = tendance;
    spanPression.innerText = pression;
}

// -------------- Main

document.addEventListener("DOMContentLoaded", function(){
// On attend que le DOM soit chargé

// processus général
    let apiKey = "e3e44c614158b32f0a3ac5273a9c9373";
    let city = 'Paris';
    let options = "&units=metric" + "&lang=fr";
    let weatherUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + options;
    console.log('API URL: ' + weatherUrl1);

    sendXhrPromise(weatherUrl1)
    .then(data=>showWeatherData(data))
    .catch(error=>console.log(error))
});