import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Detail from './pages/detail/Detail';
import Footer2 from './components/Footer2/Footer2';
import Footer from './components/Footer/Footer';
import Questions from './pages/Questions/Questions';
import Catalog from './pages/Catalog/Catalog';



const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/detail/:id' element={<Detail/>} />
        <Route path='/questions' element={<Questions/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
			</Routes>
			<Footer/>
      <Footer2/>
		</div>
	)




     
}


export default App
