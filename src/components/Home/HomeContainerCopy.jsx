import React, { useEffect, useState } from 'react'
import HomeCopy from './HomeCopy'
import axios from 'axios'


let fiveDaysWeatherKey = "4df796cfbc036b4b68580d7670971f9f"
let currentWeatherKey = "9a1d98e008294f9809be66957aa65613"
const HomeContainer = () => {
  
  const [cityName, setCityName] = useState("")
  const [dailyData, setDailyData] = useState({})
  const [fiveDaysData, setFiveDaysData] = useState({})
  
  const weatherData =(endpoint, setter)=>{
    if(cityName.length != 0){let getData = axios.get(endpoint)
      getData.then((res)=>setter(res.data))
      .catch((err)=>err)
    } 
  }
  
  
  
  let handleChange = (e)=>{
    let data = e.target.value
    setCityName(data)
  }
  
      
      const handleSubmit= (e)=>{
        e.preventDefault()
        weatherData(currentWeatherEndpoint, setDailyData)
        weatherData(fiveDaysWeatherEndpoint, setFiveDaysData)

      
      }
      let currentWeatherEndpoint= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${currentWeatherKey}&lang=es&units=metric`
      
      let fiveDaysWeatherEndpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${fiveDaysWeatherKey}&lang=es&units=metric`

      console.log(dailyData)
      console.log(fiveDaysData)
      
    return (
    <div><HomeCopy handleChange={handleChange} handleSubmit={handleSubmit} dailyData={dailyData} fiveDaysData={fiveDaysData} /></div>
    )
  }
  
  export default HomeContainer