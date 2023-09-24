import React from 'react'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";
import {Bar} from "react-chartjs-2";
import {useSelector} from "react-redux";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

function Graph() {
    const covidData = useSelector((state)=> state.covid.data);

    const chartData = {
        labels : ['Infected','Recovered', 'Deaths','Active'],
        datasets : [{
            label : "Covid-19",
            data : [covidData.confirmed,covidData.recovered,covidData.deaths,covidData.active],
            borderColor : "black",
            backgroundColor : ["blue","green","red","yellow"],
            borderWith :1
        }]
    }
    const options = {

    }
  return (
    <div className='chart'>
        <Bar
            data={chartData}
            options={options}
        >

        </Bar>
    </div>
  )
}

export default Graph