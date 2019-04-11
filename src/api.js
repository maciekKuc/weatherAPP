import axios from 'axios';

const KEY = '6f502ba12afc62626fa3e95fc8413d94';

export default async function getWeather(lat, lon){
	const KEY = '6f502ba12afc62626fa3e95fc8413d94';
	try{
			const res = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${KEY}`);
	}catch(error){
		alert(error);
	}

}; 

getWeather(12, 13);