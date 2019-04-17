import axios from 'axios';

export let temp = 0;

export default async function (lat, lon){
	const KEY = '6f502ba12afc62626fa3e95fc8413d94';
	try{
		const res = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${KEY}`);
		temp = res.main.temp;
	}catch(error){
		alert(error);
	}

}; 

