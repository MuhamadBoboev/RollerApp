import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import st from './swiper.module.scss'
import { motion } from 'framer-motion'
import 'swiper/scss';
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import './swiper.scss'

interface SwiperInterfaceDate {
	subtitle: string;
	title: string;
	text: string;
	image: string;
}
export const dateForSwiper: SwiperInterfaceDate[] = [
	{
		subtitle: 'Наши работы',
		title: 'Жилой комплекс Рассвет',
		text: 'Жилой комплекс Рассвет состоит из четырех блоков, каждый из которых имеет шесть этажей. Строительство было завершено в 2023 году. Одной из особенностей ЖК Рассвет являются оконные системы и подоконники от Unopen. Эти высококачественные оконные конструкции обеспечивают отличную звуко- и теплоизоляцию, а также защиту от нежелательных внешних воздействий. Их антрацитовый цвет придает эксклюзивный и современный вид дому. Комплекс расположен по адресу Фучика 25 (рядом с мясокомбинатом, а также остановкой конечного пункта маршрута 8).',
		image: '/assets/image/works_3.webp'
	},
	{
		subtitle: 'Наши работы',
		title: 'Жилой комплекс борбад',
		text: 'Жилой комплекс Борбад, состоит из двух блоков, каждый из которых имеет 16 этажей. Строительство было завершено в 2021 году. Местоположение комплекса - Борбад 1/2, рядом с Коммерческим университетом и Армутом. Оконные системы Unopen обеспечивают надежную защиту от шума и сохраняют тепло внутри квартиры. А подоконники от Unopen, выполненные в прекрасном золотистом дубовом цвете, добавят неповторимый шарм интерьеру.',
		image: '/assets/image/works_2.webp'
	},
]
const SwiperComponent = () => {
	const imgVariants = {
		hidden: {
			opacity: 0,
			x: 20,
			scale: 0.5
		},
		animate: (i: number) => ({
			opacity: 1,
			scale: 1,
			x: 0,
			transition: {
				delay: (i + 1) * 0.1,
			}
		})
	}
	return (
		<div className={st.swiper__wrapper} >
			<div className={st.swiper__section} >
				<div className={st.container}>
					<div className={st.swiper__main}
					>
						<Swiper
							className={st.swiper}
							modules={[Navigation, Pagination, Scrollbar, A11y]}
							spaceBetween={50}
							slidesPerView={1}
							navigation
							pagination={{
								clickableClass: `${st.vertical_Class}`,
								enabled: true,
								clickable: true,
								bulletClass: `${st.bullet}`,
								bulletActiveClass: `${st.bulletActive}`,
							}}
							scrollbar={{ draggable: true }}
						>{dateForSwiper.map((el) =>
							<SwiperSlide>
								<div className={st.sl__wrapper} >
									<motion.div
										viewport={{
											once: true
										}}
										initial="hidden"
										whileInView="animate"
										variants={imgVariants}
										className={st.sl__body}>
										<h3 className={st.sl__subtitle}>
											{el.subtitle}
										</h3>
										<h2 className={'text_h2 ' + st.title} >
											{el.title}
										</h2>
										<p className={'text ' + st.text} >
											{el.text}
										</p>
									</motion.div>
									<motion.div
										viewport={{
											once: true
										}}
										initial="hidden"
										whileInView="animate"
										variants={imgVariants}
										className={st.sl__img} >
										<img src={el.image}
											width={630}
											height={433}
											alt='sad'
										></img>
									</motion.div>
								</div>
							</SwiperSlide>)}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SwiperComponent