import React from 'react'
import {useSelector} from "react-redux"

function Card() {
    const country = useSelector((state) => state.region.country);
    const covidData = useSelector((state) => state.covid.data);

    return (
        <div className='card-list'>
        <div className='card infected'>
            <div className="card-header">
                Infected
            </div>
            <div className='card-data'>{covidData.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
            <div className='card-last-update'>Last Update : <span>{covidData.last_update}</span></div>
            <div className='card-info'>Number of infected person of COVID-19</div>
            <div className='card-iso'>{country === "" ? "All" : country}</div>
        </div>
        <div className='card recovered'>
            <div className="card-header">
                Recovered
            </div>
            <div className='card-data'>{covidData.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
            <div className='card-last-update'>Last Update : <span>{covidData.last_update}</span></div>
            <div className='card-info'>Number of recoveries from COVID-19</div>
            <div className='card-iso'>{country === "" ? "All" : country}</div>
        </div>
        <div className='card deaths'>
            <div className="card-header">
                Deaths
            </div>
            <div className='card-data'>{covidData.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
            <div className='card-last-update'>Last Update : <span>{covidData.last_update}</span></div>
            <div className='card-info'>Number of deaths caused by COVID-19</div>
            <div className='card-iso'>{country === "" ? "All" : country}</div>
        </div>
        <div className='card active'>
            <div className="card-header">
                Active
            </div>
            <div className='card-data'>{covidData.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
            <div className='card-last-update'>Last Update : <span>{covidData.last_update}</span></div>
            <div className='card-info'>Number of active cases of COVID-19</div>
            <div className='card-iso'>{country === "" ? "All" : country}</div>
        </div>
        </div>
    )
}

export default Card