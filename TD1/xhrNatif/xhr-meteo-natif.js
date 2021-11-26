// 
// Affichage de la méteo avec OpenWeatherMap
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

    sendXhr(weatherUrl1, showWeatherData);
});