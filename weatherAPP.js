$(document).ready(function() {
  //begin of starter declarations//
  let celsius = document.querySelector('#celsius');
let fahrenheit = document.querySelector('#fahrenheit');
let weather = document.querySelector('.weather');
let temp = 12;
let lon = '';
  let lat = '';
  //end od starter declarations//

  
  var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  let crd = pos.coords;
  lat = crd.latitude;
  lon = crd.longitude;
  $.getJSON(weatherAPI, data, showWeather);
}


function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);
console.log(lon);
  
  //the weather API//
 // var weatherAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=6f502ba12afc62626fa3e95fc8413d94';
  var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?lat=';
  weatherAPI += lat +'&lon='
  weatherAPI += lon 
  weatherAPI +='&APPID=6f502ba12afc62626fa3e95fc8413d94'
  var data = {
    q : "Portland,OR",
    units : "metric"
  };
  function showWeather (weatherReport) {
    temp = weatherReport.main.temp;
  }
  //$.getJSON(weatherAPI, data, showWeather);
  //the end of the weather API//
  
  //temp functions//
  celsius.addEventListener('click', (event) => {
  let tempCelsius = temp;
  if (event.target.tagName == 'BUTTON'){
    let showCelsius = '<h6 class="text-center text-light">Temperature near you: ' + tempCelsius + ' &#8451</h6>';
    weather.innerHTML = showCelsius ;
  }
});

fahrenheit.addEventListener('click', (event) => {
  let tempFahrenheit = (9/5) * temp + 32;
  if (event.target.tagName == 'BUTTON'){
    let showFahrenheit = '<h6 class="text-center text-light">Temperature near you: ' + tempFahrenheit + ' &#8457</h6>';
    weather.innerHTML = showFahrenheit ;
  }
  });
});