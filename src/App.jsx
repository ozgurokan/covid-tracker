import './App.css'
import { useEffect } from 'react'
import { fetchCovidData,fetchRegionData } from './redux/Covid/thunk'
import {useSelector, useDispatch} from "react-redux"

//components
import CardList from "./components/CardList";
import Loading from './components/Loading';
import Input from './components/Input';
import Header from './components/Header';
import Graph from './components/Graph';


function App() {

  const dispatch = useDispatch()
  const country = useSelector((state) => state.region.country)


  useEffect(()=> {
    dispatch(fetchRegionData())
    dispatch(fetchCovidData(country))
  },[country])

  

  const regionLoading = useSelector((state) => state.region.isLoading)
  const covidLoading = useSelector((state) => state.covid.isLoading)


  const covidData = useSelector((state) => state.covid.data);


  return (
    <>
    <Header/>
    {
      (regionLoading == true || covidLoading == true) ? <Loading/> : 
      <div className='App'>

        <CardList/>
        <Input/>
        <Graph/>
      </div>
    }
    
    </>
  )
}

export default App
