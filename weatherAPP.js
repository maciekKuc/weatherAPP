$(document).ready(function() {
  //begin of starter declarations//
let celsius = document.querySelector('#celsius');
let fahrenheit = document.querySelector('#fahrenheit');
let weather = document.querySelector('.weather');
let temp = 12;
let lon = 1;
let lat = 2;
let crd = 'a';
//end od starter declarations//

  
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?lat=';

function success(pos) {
  crd = pos.coords;
  console.log(crd);
  lat = pos.coords.latitude;
  lon = pos.coords.longitude; //ze względu na jakąs dziwna kolejnosc
  weatherAPI += lat +'&lon='; // kordynaty nie wydostawały się poza funkcje
  weatherAPI += lon; // stad deklaracja zmiennej pogodowej i wywołanie API pogodowej znalazly sie w funkcji 
  weatherAPI +='&APPID=6f502ba12afc62626fa3e95fc8413d94'; // odpowiedzi API geolokacji
  $.getJSON(weatherAPI, data, showWeather);
  }

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

  
  //the weather API//
  //var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=6f502ba12afc62626fa3e95fc8413d94';
const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?lat=';
 
var data = {
  //q : "Portland,OR",
  units : "metric"
};

function showWeather (weatherReport) {
   temp = weatherReport.main.temp;
}
  //$.getJSON(weatherAPI, data, showWeather);
  //the end of the weather API//
  
  //temp functions//
celsius.addEventListener('click', (event) => {
  let tempCelsius = temp.toFixed(2);
  if (event.target.tagName == 'BUTTON'){
    let showCelsius = '<h6 class="text-center text-light">Temperature near you: ' + tempCelsius + ' &#8451</h6>';
    weather.innerHTML = showCelsius ;
  }
});

fahrenheit.addEventListener('click', (event) => {
  let tempFahrenheit = ((9/5) * temp + 32).toFixed(2);
  if (event.target.tagName == 'BUTTON'){
    let showFahrenheit = '<h6 class="text-center text-light">Temperature near you: ' + tempFahrenheit + ' &#8457</h6>';
    weather.innerHTML = showFahrenheit ;
  }
  });
  console.log(lon);
});
