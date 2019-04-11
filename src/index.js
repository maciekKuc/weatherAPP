import getWeather from 'api';

const celsius = document.querySelector('#celsius');
const fahrenheit = document.querySelector('#fahrenheit');
const weather = document.querySelector('.weather');



const getWeatherImg = function(){
    if(temp >= 30){
      document.getElementById('main').style.backgroundImage = "url('./img/sunny.jpg')";
   }else if(temp >= 15 && temp < 30){
      document.getElementById('main').style.backgroundImage = "url('./img/spring.jpg')";
   }else if(temp >= 0 && temp < 15){
      document.getElementById('main').style.backgroundImage = "url('./img/rainy.jpg')";
   }else if(temp < 0){
      document.getElementById('main').style.backgroundImage = "url('./img/snowy.jpg')";
   }
}


celsius.addEventListener('click', (event) => {
  let tempCelsius = temp.toFixed(2);
  if (event.target.tagName == 'BUTTON'){
    let showCelsius = '<h6 class="temperature">Temperature near you: ' + tempCelsius + ' &#8451</h6>';
    weather.innerHTML = showCelsius ;
  }
  getWeatherImg();
});

fahrenheit.addEventListener('click', (event) => {
  let tempFahrenheit = ((9/5) * temp + 32).toFixed(2);
  if (event.target.tagName == 'BUTTON'){
    let showFahrenheit = '<h6 class="temperature">Temperature near you: ' + tempFahrenheit + ' &#8457</h6>';
    weather.innerHTML = showFahrenheit ;
  }
  getWeatherImg();
  });
  
