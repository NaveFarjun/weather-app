import React, { useEffect, useState, useRef } from "react";
import Select from "react-select";

import './city-selection.css'


const CitySelection = ({updateSelectedCity, cities})=>{

    const selectedOptionValue = useRef(null)

    function handleSubmitClicked(){
        updateSelectedCity(selectedOptionValue.current);
    }

    function handleSlectedCityChanged(selected){
        selectedOptionValue.current = selected.value;
    }
 

    return (
        <div className='selection-container'>
            <label className='label'>City</label>
            <Select options={cities} onChange={handleSlectedCityChanged} />
            <button className="submit-btn"onClick={handleSubmitClicked} >Submit</button> 
        </div>
        
    )
}

export default CitySelection;
