import React from 'react'
import { Outlet } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
  return (
    <div className='app'>
      <Outlet/>
        <h3 className='footer'>Creado por Patricio Amaya</h3>
        <h4 className='footer'>Datos obtenidos gracias a OpenWeather</h4>
    </div>
  )
}

export default Footer