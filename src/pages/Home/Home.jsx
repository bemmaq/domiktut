
import Done from "../Done/Done"

import React from 'react'

import Get from '../../components/Get/Get'

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
		<Done/>
	 </div>

    <div>

   <Header/>

      <Get/>


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