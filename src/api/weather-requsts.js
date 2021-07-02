import Axios from 'axios';

const cities_url = "https://weather-4f58b12c60d4.herokuapp.com/data/cities.json";
const weather_url = "https://weather-4f58b12c60d4.herokuapp.com/data/weather.json";

async function getAllCities(){
    let res = await getRequest(cities_url);
    return res.data;
}

async function getCityWeatherByID(cityID){
    let res = await getRequest(weather_url);
    let data;
    if(res && res.data){
        data = res.data[cityID];
    }
    return data;
}

async function getRequest(url, headers = {"Access-Control-Allow-Origin": "*"}){
    const data = await Axios.get(url, headers);
    return data;
}


export default {
    getAllCities:getAllCities,
    getCityWeatherByID:getCityWeatherByID
}