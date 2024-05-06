
import Done from "../Done/Done"

import React from 'react'
import Arrange from '../Arrange/Arrange'
import Questions from '../Questions/Questions'
import Footer from '../../components/Footer/Footer'
import About from '../About/About'
import Housing from '../Housing/Housing'
import { Link } from 'react-router-dom'



const Home = () => {
  return (

	 <div>
		<Done/>
	 </div>

    <div>

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