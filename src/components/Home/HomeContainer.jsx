import React, {useEffect, useState } from 'react'
import Home from './Home'
import axios from 'axios'

let currentWeatherKey = import.meta.env.VITE_USER_CURRENTWEATHERKEY

const HomeContainer = () => {
      
    const [cityName, setCityName] = useState("")
    const [dailyData, setDailyData] = useState({})
    const [err, setErr] = useState({})
     
      let handleChange = (e)=>{
        let data = e.target.value
        setCityName(data)
      }
    
      let currentWeatherEndpoint= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${currentWeatherKey}&lang=es&units=metric`

    useEffect(()=>{
      setErr(err)
      setDailyData("vacio")
    },[err])

  const handleSubmit= (e)=>{
    e.preventDefault()
    if(cityName.length != 0){
      
        let getData = axios.get(currentWeatherEndpoint)
        getData.then((res)=>setDailyData(res.data))
        .catch((err )=> setErr(err))
      }  
    }

    return (
      <div><Home handleChange={handleChange} handleSubmit={handleSubmit} dailyData={dailyData} err={err} /></div>
      )
    }
    
    export default HomeContainer