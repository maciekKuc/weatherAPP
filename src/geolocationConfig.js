import axios from 'axios';


export default async function (){
  const KEY = 'fd14960257ac520aa0b9e42dc396a0db';
  try{
    const res = await axios(`http://api.ipapi.com/check?access_key=${KEY}`);
    
    console.log(res);
    return res;
  }catch(error){
    alert(error);
  }

}; 

