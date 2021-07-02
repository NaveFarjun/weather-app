import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import CitySelection from "../city-selection/city-selection-comp";
import CityWeatherTable from '../city-weather-table/city-weather-table'
import requestsApi from '../../api/weather-requsts';

import './weather-display.css';


const WeatherDisplay = ()=>{

    const [selectedCityWeatherData, setSelectedCityWeatherData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [citiesOptions, setCitiesOptions] = useState([]);
    const [errMsg, setErrorMsg] = useState(null);

    useEffect(()=>{
        requestsApi.getAllCities().then(data=>{
            const options = data.map(element=>{return {label:element.name, value:element.id}});
            setCitiesOptions(options);
        }).catch(err=>{
            console.log(err);
            setErrorMsg('Error by trying fetch citites');
        })
    },[]);

    async function updateSelectedCity(cityID){
        setErrorMsg(null);
        if(cityID){
            setIsLoading(true);
            setSelectedCityWeatherData(null);
            requestsApi.getCityWeatherByID(cityID).then((data)=>{
                setSelectedCityWeatherData(data);
            }).catch(err=>{
                console.log(err);
                setErrorMsg(`Error by trying fetch the city weather`);
            }).finally(()=>{setIsLoading(false)})
        }
        else{
            setErrorMsg(`You have to choose city!`);
        }
    }

    return(
        <div className='weather-display-container'>
            <CitySelection updateSelectedCity={updateSelectedCity} cities={citiesOptions} />
            { errMsg && <label className='error-label'>{errMsg}</label> }
            { selectedCityWeatherData && <CityWeatherTable data={selectedCityWeatherData} cities={citiesOptions}/> }
            { isLoading && <Loader type="Rings" color="black" height={100} width={100} /> }
        </div>
    )
}

export default WeatherDisplay;