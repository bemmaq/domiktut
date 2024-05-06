import React from 'react'
import Arrange from '../Arrange/Arrange'
import Questions from '../Questions/Questions'

import About from '../About/About'
import Housing from '../Housing/Housing'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div>
   <Header/>
      home
      <Link to={'/filter'}>
      <button >Click


</button>
      </Link>
      
      <About/>
       <Arrange/>
       <Questions/>
       <Footer/>
      

    </div>
  )
}

export default Home