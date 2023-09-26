import React from 'react'
import {useSelector} from "react-redux";
import Loading from './Loading';

function Card() {
    const country = useSelector((state) => state.region.country);
    const covidData = useSelector((state) => state.covid.data);
    const covidLoading = useSelector((state) => state.covid.isLoading);
    const regionLoading = useSelector((state) => state.region.isLoading);

    const stringData = (data) => {
        let result = "";
        data != null ? result = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : result  = "no data available";

        return result;
    }
    const lastUpdateString = (data) => {
        let result = "";
        data ? result = data : result = "no data avaliable";

        return result
    }


    return (
        <>

        {
            (covidLoading || regionLoading) ? <Loading/> : 
            <div className='card-list'>
        <div className='card infected'>
            <div className="card-header">
                Infected
            </div>
            <div className='card-data'>{stringData(covidData.confirmed)}</div>
            <div className='card-last-update'>Last Update : <span>{lastUpdateString(covidData.last_update)}</span></div>
            <div className='card-info'>Number of infected person of COVID-19</div>
            <div className='card-iso'>{country === "" ? "All" : country}</div>
        </div>
        <div className='card recovered'>
            <div className="card-header">
                Recovered
            </div>
            <div className='card-data'>{stringData(covidData.recovered)}</div>
            <div className='card-last-update'>Last Update : <span>{lastUpdateString(covidData.last_update)}</span></div>
            <div className='card-info'>Number of recoveries from COVID-19</div>
            <div className='card-iso'>{country === "" ? "All" : country}</div>
        </div>
        <div className='card deaths'>
            <div className="card-header">
                Deaths
            </div>
            <div className='card-data'>{stringData(covidData.deaths)}</div>
            <div className='card-last-update'>Last Update : <span>{lastUpdateString(covidData.last_update)}</span></div>
            <div className='card-info'>Number of deaths caused by COVID-19</div>
            <div className='card-iso'>{country === "" ? "All" : country}</div>
        </div>
        <div className='card active'>
            <div className="card-header">
                Active
            </div>
            <div className='card-data'>{stringData(covidData.active)}</div>
            <div className='card-last-update'>Last Update : <span>{lastUpdateString(covidData.last_update)}</span></div>
            <div className='card-info'>Number of active cases of COVID-19</div>
            <div className='card-iso'>{country === "" ? "All" : country}</div>
        </div>
        </div>
        }
        

        </>
    )
}

export default Card