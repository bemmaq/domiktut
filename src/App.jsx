import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Detail from './pages/detail/Detail'
import Home from './pages/Home/Home'

const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/detail/:id' element={<Detail />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
