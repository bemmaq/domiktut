// import React from 'react'
import styles from './KartaAndVideo.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { FreeMode, Pagination } from 'swiper/modules'


// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'



const KartaAndVideo = () => {
	return (
		<>
			<div className={styles.karta_video}>
				<div className={styles.video}>
					<iframe
						className={styles.youTube}
						width='580'
						height='420'
						src='https://www.youtube.com/embed/BghLya5KkIA?si=cQt58gkMdyjJjxsr'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</div>
				<div className={styles.karta}>
					<iframe
						className={styles.googleMap}
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.74256946774!2d74.50945967846353!3d42.87697130659798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1714935986692!5m2!1sru!2skg'
						width='580'
						height='420'
						frameBorder='0'
						allowFullScreen
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</div>

			<div className={styles.bigGoogleMaps}>
				<iframe
					className={styles.googleMap}
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.74256946774!2d74.50945967846353!3d42.87697130659798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1714935986692!5m2!1sru!2skg'
					width='1200'
					height='600'
					frameBorder='0'
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</div>

			<div className={styles.description}>
				<h1>Отзывы</h1>

				<div>
					<Swiper
						slidesPerView={3}
						spaceBetween={30}
						freeMode={true}
						pagination={{
							clickable: true,
						}}
						modules={[FreeMode, Pagination]}
						className='mySwiper'
						// modules={[FreeMode, Pagination]}
					>
						<SwiperSlide
							style={{
								marginBottom: '200px',
							}}
						>
							<p className={styles.review}>
								Ожегова, «дом» — это не только «жилое здание», но именно «свое
								жилье», а также «семья, люди, живущие вместе, их хозяйство»,
								«царствующий род, династия»9, а по словарю Т. Ф. Ефремовой еще и
								«место постоянного проживания человека, характеризующееся
								определенными отношениями и укладом жизни»10. Ожегова, «дом» —
								это не только «жилое здание», но именно «свое жилье», а также
								«семья, люди, живущие вместе, их хозяйство», «царствующий род, .
							</p>
						</SwiperSlide>
						<SwiperSlide>
							<p className={styles.review}>
								Ожегова, «дом» — это не только «жилое здание», но именно «свое
								жилье», а также «семья, люди, живущие вместе, их хозяйство»,
								«царствующий род, династия»9, а по словарю Т. Ф. Ефремовой еще и
								«место постоянного проживания человека, характеризующееся
								определенными отношениями и укладом жизни»10. Ожегова, «дом» —
								это не только «жилое здание», но именно «свое жилье», а также
								«семья, люди, живущие вместе, их хозяйство», «царствующий род,{' '}
							</p>
						</SwiperSlide>
						<SwiperSlide>
							<p className={styles.review}>
								Ожегова, «дом» — это не только «жилое здание», но именно «свое
								жилье», а также «семья, люди, живущие вместе, их хозяйство»,
								«царствующий род, династия»9, а по словарю Т. Ф. Ефремовой еще и
								«место постоянного проживания человека, характеризующееся
								определенными отношениями и укладом жизни»10. Ожегова, «дом» —
								это не только «жилое здание», но именно «свое жилье», а также
								«семья, люди, живущие вместе, их хозяйство», «царствующий род,
								династия»9, а по словарю Т. Ф. Ефремовой еще и «место
								постоянного проживания человека, характеризующееся определенными
								отношениями и у.
							</p>
						</SwiperSlide>
						<SwiperSlide>
							<p className={styles.review}>
								Ожегова, «дом» — это не только «жилое здание», но именно «свое
								жилье», а также «семья, люди, живущие вместе, их хозяйство»,
								«царствующий род, династия»9, а по словарю Т. Ф. Ефремовой еще и
								«место постоянного проживания человека, характеризующееся
								определенными отношениями и укладом жизни»10. Ожегова, «дом» —
								это не только «жилое здание», .
							</p>
						</SwiperSlide>
						<SwiperSlide>
							<p className={styles.review}>
								Ожегова, «дом» — это не только «жилое здание», но именно «свое
								жилье», а также «семья, люди, живущие вместе, их хозяйство»,
								«царствующий род, династия»9, а по словарю Т. Ф. Ефремовой еще и
								«место постоянного проживания человека, характеризующееся
								определенными отношениями и укладом жизни»10. Ожегова, «дом» —
								это не только «жилое здание», но именно «свое жилье», а также
								«семья, люди, живущие вместе, их хозяйство», «царствующий род,
								династия»9, а по словарю Т. Ф. Ефремовой еще и{' '}
							</p>
						</SwiperSlide>
						<SwiperSlide>
							<p className={styles.review}>
								Ожегова, «дом» — это не только «жилое здание», но именно «свое
								жилье», а также «семья, люди, живущие вместе, их хозяйство»,
								«царствующий род, династия»9, а по словарю Т. Ф. Ефремовой еще и
								«место постоянного проживания человека, характеризующееся
								определенными отношениями и укладом жизни»10. Ожегова, «дом» —
								это не только «жилое здание», но именно «свое жилье», а также
								«семья, люди, живущие вместе, их хозяйство», «царствующий род,
								династия»9, а по словарю Т. Ф. Ефремовой еще и «место
								постоянного проживания человека,{' '}
							</p>
						</SwiperSlide>
						<SwiperSlide>
							<p className={styles.review}>
								Ожегова, «дом» — это не только «жилое здание», но именно «свое
								жилье», а также «семья, люди, живущие вместе, их хозяйство»,
								«царствующий род, династия»9, а по словарю Т. Ф. Ефремовой еще и
								«место постоянного проживания человека, характеризующееся
								определенными отношениями и укладом жизни»10. Ожегова, «дом» —
								это не только «жилое здание», но именно «свое жилье», а также
								«семья, люди, живущие вместе, их хозяйство», «царствующий род,{' '}
							</p>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	)
}

export default KartaAndVideo
