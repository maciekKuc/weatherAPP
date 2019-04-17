//import getWeather from './api';

//export const getGeoLocation = () => new Promise((resolve, reject) => {
//  function positionSuccess(position) {
  //    resolve(position);
 // }
 // function error() {
 //   reject();
 // }
 // navigator.geolocation.getCurrentPosition(positionSuccess, error, { enableHighAccuracy: true });
//});

export let lat = 0;
export let lon = 0;


export const success = (pos) => {
  	lon = pos.coords.longitude;
  	lat = pos.coords.latitude;
}

export const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
