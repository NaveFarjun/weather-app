import React, { useEffect, useState } from "react";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './city-weather-table.css';



const CityWeatherTable = ({data})=>{
    const rowData = [
        { today: `${data.today.min}C - ${data.today.max}C`, tomorrow: `${data.tomorrow.min}C - ${data.tomorrow.max}C`},
    ];
 
    return (
        <div className="table-container">
            <div className="ag-theme-alpine">
                <AgGridReact 
                    headerHeight={60}
                    rowHeight={112}
                    rowData={rowData}>
                    <AgGridColumn field="today"></AgGridColumn>
                    <AgGridColumn field="tomorrow"></AgGridColumn>
                </AgGridReact>
            </div>
        </div>
    );
    
}

export default CityWeatherTable;