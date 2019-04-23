import getWeather from './api';

export const getGeoLocation = () => new Promise((resolve, reject) => {
  function positionSuccess(position) {
      resolve(position);
  }
  function error() {
    reject();
  }
  navigator.geolocation.getCurrentPosition(positionSuccess, error, { enableHighAccuracy: true });
});

export const success = (pos) => {
	let position = pos.coords;
	console.log(position);
  	return position;
}

export const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

//export const getGeoLocation = async () => {
	
	//navigator.geolocation.getCurrentPosition(success, error, options);

//}
