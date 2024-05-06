import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Catalog from './pages/Catalog/Catalog'
import Love from './pages/Love/Love'

const App = () => {
  return (
    <div>
      <Love/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
      </Routes>
      
    </div>
  )
}

export default App