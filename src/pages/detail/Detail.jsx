// import React from 'react'
import styles from './Detail.module.css'
import vector from '../../assets/svg/vector.svg'
import heart from '../../assets/svg/heart.svg'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadProductsInfo } from '../../store/slices/productInfoSlice'
import bed from '../../assets/svg/bed.svg'
import avatar from '../../assets/svg/avatar.svg'
import zalog from '../../assets/svg/zalog.svg'
import KartaAndVideo from './kartaAndVideo/KartaAndVideo'

const Detail = () => {
	const params = useParams()
	console.log(params.id)

	const dispatch = useDispatch()
	const { productsInfo } = useSelector((state) => state.productsInfo)
	console.log(productsInfo)

	useEffect(() => {
		dispatch(loadProductsInfo(params.id))
	}, [dispatch, params.id])
	console.log(params.id);

	if (productsInfo === null) {
		return <h1>Loading...</h1> // Вернуть JSX в случае загрузки
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.detail}>
				<div className={styles.detail_title}>
					<div className={styles.detail_text}>
						<h1>{productsInfo?.name}</h1>
						<p>Рублево-Успенское шоссе 24 км от МКАД</p>
					</div>

					<div className={styles.detail_img}>
						<img src={vector} alt='' />
						<img src={heart} alt='' />
					</div>
				</div>

				<div className={styles.detail_image}>
					<div
						style={{
							backgroundImage: `url(${productsInfo?.avatar?.avatar1 || ''})`,
						}}
						className={styles.image_1}
					>
						<div className={styles.detail_btn}>
							<button>Смотреть больше фото</button>
							<button>
								<a href='https://www.youtube.com/embed/BghLya5KkIA?si=cQt58gkMdyjJjxsr'>
									Смотреть видео
								</a>
							</button>
						</div>
					</div>

					<div className={styles.image_2}>
						<div className={styles.img}>
							<img
								src={productsInfo?.avatar?.avatar2 || ''}
								alt=''
								style={{ margin: '0px 10px 10px 10px' }}
							/>

							<img
								src={productsInfo?.avatar?.avatar3 || ''}
								alt=''
								style={{ margin: '10px 0px 0px 10px' }}
							/>
						</div>
						<div className={styles.img_2}>
							<img
								src={productsInfo?.avatar?.avatar4 || ''}
								alt=''
								style={{
									margin: '0px 0px 10px 10px',
									borderRadius: '0px 10px 0px 0px',
								}}
							/>

							<img
								src={productsInfo?.avatar?.avatar5 || ''}
								style={{
									margin: '0px 0px 10px 10px',
									borderRadius: '0px 0px 10px 0px',
								}}
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.info}>
				<div className={styles.detail_info}>
					<div className={styles.boxes}>
						<div className={styles.box}>
							<p>Тип жилья</p>
							<h5>Уникальное жилье</h5>
						</div>
						<div className={styles.box}>
							<p>Этажи</p>
							<h5>2 этажа </h5>
						</div>
						<div className={styles.box}>
							<p>Площадь</p>
							<h5> 234 м2</h5>
						</div>
						<div className={styles.box}>
							<p>Участок</p>
							<h5> 12 соток</h5>
						</div>
					</div>

					<h1 className={styles.detail_hr}>
						<hr />
					</h1>

					<div className={styles.cards}>
						<div className={styles.card}>
							<img src={bed} alt='' />
							<p>25 спальных мест</p>
						</div>
						<div className={styles.card}>
							<img src={bed} alt='' />
							<p>5 спален</p>
						</div>
						<div className={styles.card}>
							<img src={avatar} alt='' />
							<p>до 35 человек</p>
						</div>
					</div>

					<div className={styles.description}>
						<h1>Описание</h1>
						<p>
							Ожегова, «дом» — это не только «жилое здание», но именно «свое
							жилье», а также «семья, люди, живущие вместе, их хозяйство»,
							«царствующий род, династия»9, а по словарю Т. Ф. Ефремовой еще и
							«место постоянного проживания человека, характеризующееся
							определенными отношениями и укладом жизни»10. Ожегова, «дом» — это
							не только «жилое здание», но именно «свое жилье», а также «семья,
							люди, живущие вместе, их хозяйство», «царствующий род, династия»9,
							а по словарю Т. Ф. Ефремовой еще и «место постоянного проживания
							человека, характеризующееся определенными отношениями и укладом
							жизни»10. Ожегова, «дом» — это не только «жилое здание», но именно
							«свое жилье», а также «семья, люди, живущие вместе, их хозяйство»,
							«царствующий род, династия»9, а по словарю Т. Ф. Ефремовой еще и
							«место постоянного проживания человека, характеризующееся
							определенными отношениями и укладом жизни»10.
						</p>
					</div>

					<div className={styles.description}>
						<h1>Дополнительные платы</h1>
						<p>
							Ожегова, «дом» — это не только «жилое здание», но именно «свое
							жилье», а также «семья, люди, живущие вместе, их хозяйство»,
							«царствующий род, династия»9, а по словарю Т. Ф. Ефремовой еще и
							«место постоянного проживания человека, характеризующееся
							определенными отношениями и укладом жизни»10. Ожегова, «дом» — это
							не только «жилое здание», но именно «свое жилье», а также «семья,
							люди, живущие вместе, их хозяйство», «царствующий род, династия»9,
							а по словарю Т. Ф. Ефремовой еще и «место постоянного проживания
							человека, характеризующееся определенными отношениями и укладом
							жизни»10. Ожегова, «дом» — это не только «жилое здание», но именно
							«свое жилье», а также «семья, люди, живущие вместе, их хозяйство»,
							«царствующий род, династия»9, а по словарю Т. Ф. Ефремовой еще и
							«место постоянного проживания человека, характеризующееся
							определенными отношениями и укладом жизни»10.
						</p>
					</div>

					<div className={styles.data}>
						<h1>Время заезда и выезда</h1>
						<div className={styles.time}>
							<input className={styles.time_1} type='time' />
							<input className={styles.time_2} type='time' />
						</div>
					</div>

					<div className={styles.description}>
						<h1>Дополнительные платы</h1>
						<p>
							Ожегова, «дом» — это не только «жилое здание», но именно «свое
							жилье», а также «семья, люди, живущие вместе, их хозяйство»,
							«царствующий род, династия»9, а по словарю Т. Ф. Ефремовой еще и
							«место постоянного проживания человека, характеризующееся
							определенными отношениями и укладом жизни»10. Ожегова, «дом» — это
							не только «жилое здание», но именно «свое жилье», а также «семья,
							люди, живущие вместе, их хозяйство», «царствующий род, династия»9,
							а по словарю Т. Ф. Ефремовой еще и «место постоянного проживания
							человека, характеризующееся определенными отношениями и укладом
							жизни»10. Ожегова, «дом» — это не только «жилое здание», но именно
							«свое жилье», а также «семья, люди, живущие вместе, их хозяйство»,
							«царствующий род, династия»9, а по словарю Т. Ф. Ефремовой еще и
							«место постоянного проживания человека, характеризующееся
							определенными отношениями и укладом жизни»10.
						</p>
					</div>
				</div>

				<div className={styles.detail_fixed}>
					<div className={styles.fixed}>
						<h1>Стоимость</h1>

						<div className={styles.detail_price}>
							<div className={styles.prices}>
								<div className={styles.price}>
									<p>Будни</p>
									<h1>8000 ₽</h1>
								</div>

								<div className={styles.price}>
									<p>Пятница</p>
									<h1>10 000 ₽</h1>
								</div>
							</div>

							<div className={styles.prices}>
								<div className={styles.price}>
									<p>Суббота</p>
									<h1>12 000 ₽</h1>
								</div>

								<div className={styles.price}>
									<p>Воскресенье</p>
									<h1>12 000 ₽</h1>
								</div>
							</div>

							<div className={styles.vertical_line}>
								<p></p>
							</div>

							<div className={styles.zalog}>
								<div className={styles.imgZalog}>
									<p>Залог</p>
									<img width={25} src={zalog} alt='' />
								</div>
								<h1>2000 ₽</h1>
							</div>
						</div>

						<div className={styles.horizontal_line}></div>

						<div className={styles.section_2}>
							<p>Полные выходные (ПТ-ВС)</p>
							<h1>12 000 ₽</h1>
						</div>

						<div className={styles.horizontal_line}></div>

						<div className={styles.section_3}>
							<div className={styles.section_price}>
								<p>Новый год (2 дня)7u</p>
								<h1>от 100 000 ₽</h1>
							</div>

							<div className={styles.section_price}>
								<p>Январские празднкии (сутки)</p>
								<h1>от 30 000 ₽</h1>
							</div>

							<div className={styles.btns}>
								<div className={styles.btnn}>
									<button>Позвонить</button>
									<button>Написать</button>
								</div>
								<div className={styles.btn}>
									<button>Информация для юр. лиц</button>
									<button>Выездное обслуживание</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<KartaAndVideo />
		</div>
	)
}

export default Detail
