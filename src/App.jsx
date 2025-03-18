import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeContainer from './components/Home/HomeContainer'


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
