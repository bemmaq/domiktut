import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Catalog from './pages/Catalog/Catalog'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Housing from './pages/Housing/Housing'
import Footer2 from './components/Footer2/Footer2'


const App = () => {
  return (
    <div>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/filter' element={<Housing/>}/>
      </Routes>
      
      <Footer2/>
    </div>
  )
}

export default App