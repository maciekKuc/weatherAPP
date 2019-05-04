import axios from 'axios';
import getGeoLocation from './geolocationConfig';


export default async function (){
	const KEY = '6f502ba12afc62626fa3e95fc8413d94';
	const cords = await getGeoLocation();
	try{
		const res = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${cords.data.latitude}&lon=${cords.data.longitude}&APPID=${KEY}`,{
			params:{
				units : "metric"
			}
		});

		return res.data.main.temp;
	}catch(error){
		alert(error);
	}

}; 

