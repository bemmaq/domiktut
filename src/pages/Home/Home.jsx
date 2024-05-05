import React from 'react'
import Arrange from '../Arrange/Arrange'
import Questions from '../Questions/Questions'
import Footer from '../../components/Footer/Footer'
import About from '../About/About'


const Home = () => {
  return (
    <div>
      <About/>
       <Arrange/>
       <Questions/>
       <Footer/>
    </div>
  )
}

export default Home