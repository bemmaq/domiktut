import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts } from '../../store/slices/productSlice'
import { NavLink } from 'react-router-dom'

const Done = () => {
	const dispatch = useDispatch()
	const { products } = useSelector(store => store.products)
	console.log(products)

	useEffect(() => {
		dispatch(loadProducts())
	}, [dispatch])

	if (products.length === 0) {
		return <h1>Loading...</h1> // Вернуть JSX в случае загрузки
	}

	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: 15,
			}}
		>
			{products.slice(6, 16).map(el => {
				return (
					<NavLink to={`/detail/${el.id}`} key={el.id}>
						<div
							style={{
								width: 200,
							}}
							key={el.idMeal}
						>
							<img style={{ width: '100%' }} src={el.avatar.avatar1} alt='' />
							<button>add</button>
						</div>
					</NavLink>
				)
			})}
		</div>
	)
}

export default Done
