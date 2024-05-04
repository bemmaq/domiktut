import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Catalog from './pages/Catalog/Catalog'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App