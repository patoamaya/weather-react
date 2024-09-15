import React, {useEffect, useState } from 'react'
import Home from './Home'
import axios from 'axios'



let currentWeatherKey = "9a1d98e008294f9809be66957aa65613"
const HomeContainer = () => {
  
  
    
    const [cityName, setCityName] = useState("")
    const [dailyData, setDailyData] = useState({})
    const [err, setErr] = useState({})
    
    // const weatherData =(endpoint, setter)=>{
    //   if(cityName.length != 0){
        
    //     let getData = axios.get(endpoint)
    //     getData.then((res)=>setter(res.data))
    //     .catch((err)=>console.log(err))
    //   } 
    // }
    
      
    
      let handleChange = (e)=>{
        let data = e.target.value
        setCityName(data)


         
      }
    
      let currentWeatherEndpoint= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${currentWeatherKey}&lang=es&units=metric`
    
 
    
    
    useEffect(()=>{
      setErr(err)
      setDailyData("vacio")
      console.log(err)
    },[err])

  const handleSubmit= (e)=>{
    e.preventDefault()
    if(cityName.length != 0){
      
        let getData = axios.get(currentWeatherEndpoint)
        getData.then((res)=>setDailyData(res.data))
        .catch((err )=> setErr(err))
        
        
        
        // .catch((error)=>setErr(error))
        // console.log(err)
      } 
      // weatherData(currentWeatherEndpoint, setDailyData)
      
      
      
    }

    

 
    
    
    
    
    console.log(dailyData)
    
    
    return (
      <div><Home handleChange={handleChange} handleSubmit={handleSubmit} dailyData={dailyData} err={err} /></div>
      )
    }
    
    export default HomeContainer