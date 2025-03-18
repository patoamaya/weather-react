import './Home.css'
import {Button, TextField} from '@mui/material'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';


const Home = ({handleChange, handleSubmit, dailyData, err }) => {
  
  
  
  
  
  
  
  let dailyUrl = dailyData.main ?  `https://openweathermap.org/img/wn/${dailyData.weather[0].icon}@2x.png` : ""
  
  
  
    if(dailyData.cod === 200) {
      return(
        <main className='container'>
        <div
        className='fullForm'>
        <form action=""onSubmit={(e)=>{handleSubmit(e)}}>
  

        <TextField
         color="secondary"
         id="outlined-basic"
         label="Nombre de ciudad"
         variant="standard"
         onChange={(e)=>{handleChange(e)}}
         className='fullField' 
         placeholder='Nombre de la ciudad'
         />
        
        <div className="fullBtn">
        <Button
        variant='contained'
        color='secondary'
        size='large'
        type='submit'
        > Buscar </Button>
        </div>
    </form>
      </div >
            <div className='currentContainer'>
           
            <div className='currentTempContainer'>

            <h1>{dailyData.name} </h1>
            <p>{dailyData.main.temp.toFixed(1)} °C</p>
            < img src={dailyUrl}/>
            <div className='downUp'>
              <p >Min : {dailyData.main.temp_min.toFixed([])} °</p> 

              <p >Max: {dailyData.main.temp_max.toFixed()} °</p>
              
              </div>
             
            </div>
            <div className="currentInfoContainer">
              <p><EmojiPeopleRoundedIcon className='fl'/>  Sensación térmica. : {dailyData.main.feels_like.toFixed(1)} °C</p> 
              <p> <WbSunnyRoundedIcon className='clima'/> Clima : {dailyData.weather[0].description}</p>
              <p> <WaterDropRoundedIcon className='humidity'/> Humedad: {dailyData.main.humidity} %</p>

            </div>
            </div>
           </main>
           
          )}else if(err.response && dailyData == "vacio"){
            return(

              <main className='errorEmptyContainer' >
              
              <div className='errorEmpty'>
        
              <div
             className='errorEmptyTitleContainer'>
                <h2 className='titleErr'>No se ha encontrado la ciudad solicitada, intente nuevamente</h2>
              </div>  
        
              <div
                className='emptyForm'>
                <form action=""onSubmit={(e)=>{handleSubmit(e)}}>
                {/* <input type="text" onChange={(e)=>{handleChange(e)}} className='fieldInput' 
                placeholder='Nombre de la ciudad'/> */}
        
                
                <TextField
                 color="secondary"
                 id="outlined-basic"
                 label="Nombre de ciudad"
                 variant="outlined"
                 onChange={(e)=>{handleChange(e)}}
                 className='emptyField' 
                 placeholder='Nombre de la ciudad'
                 />
               
        
                
                <div className="emptyBtn">
                <Button
                variant='contained'
                color='secondary'
                size='large'
                type='submit'
                > Buscar </Button>
                </div>
            </form>
              </div >
        
        
                </div>
             
                </main>
              
            )
          }
          
          else if(err = {}){
            return(
              <main className='emptyContainer' >
              
              <div className='empty'>
        
              <div className='emptyTitleContainer'>
                <p>Weather App </p>
              </div>  
        
              <div
                className='emptyForm'>
                <form action=""onSubmit={(e)=>{handleSubmit(e)}}>                
                <TextField
                 color="secondary"
                 id="outlined-basic"
                 label="Nombre de ciudad"
                 variant="outlined"
                 onChange={(e)=>{handleChange(e)}}
                 className='emptyField' 
                 placeholder='Nombre de la ciudad'
                 />
               
        
                
                <div className="emptyBtn">
                <Button
                variant='contained'
                color='secondary'
                size='large'
                type='submit'
                > Buscar </Button>
                </div>
            </form>
              </div >
        
        
                </div>
             
                </main>
              )
      }
    
    }
        

 

export default Home