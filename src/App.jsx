import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeContainer from './components/Home/HomeContainer'
import Footer from './components/Footer/Footer'



function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route element={<Footer/>}>
      <Route path='/' element={<HomeContainer/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
