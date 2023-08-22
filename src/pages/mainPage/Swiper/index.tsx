import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import st from './swiper.module.scss'
import 'swiper/scss';
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import './swiper.scss'

interface SwiperInterfaceDate {
	subtitle: string;
	title: string;
	text: string;
}
export const dateForSwiper: SwiperInterfaceDate[] = [
	{
		subtitle: 'Наши работы',
		title: 'наименовние проекта',
		text: 'Основная цель нашей компании является производство качественной продукции с гарантией. Для достижения этой цели мы сотрудничаем с передовыми европейскими и турецкими компаниями как «Krauss Mafei», Renolit, «Mikrosan», «Akdeniz» и у нас трудятся высококвалифицированные кадры.'
	},
	{
		subtitle: 'Наши работы',
		title: 'наименовние проекта',
		text: 'Основная цель нашей компании является производство качественной продукции с гарантией. Для достижения этой цели мы сотрудничаем с передовыми европейскими и турецкими компаниями как «Krauss Mafei», Renolit, «Mikrosan», «Akdeniz» и у нас трудятся высококвалифицированные кадры.'
	},
	{
		subtitle: 'Наши работы',
		title: 'наименовние проекта',
		text: 'Основная цель нашей компании является производство качественной продукции с гарантией. Для достижения этой цели мы сотрудничаем с передовыми европейскими и турецкими компаниями как «Krauss Mafei», Renolit, «Mikrosan», «Akdeniz» и у нас трудятся высококвалифицированные кадры.'
	}

]
const SwiperComponent = () => {
	return (
		<div className={st.swiper__wrapper} >
			<div className={st.swiper__section} >
				<div className={'_container ' + st.container}>
					<div className={st.swiper__main} >
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
									<div className={st.sl__body}>
										<h3 className={st.sl__subtitle}>
											{el.subtitle}
										</h3>
										<h2 className={'text_h2 ' + st.title} >
											{el.title}
										</h2>
										<p className={'text ' + st.text} >
											{el.text}
										</p>
									</div>
									<div className={st.sl__img} >
										<img src='/assets/image/works_1.webp'
											width={630}
											height={433}
											alt='sad'
										></img>
									</div>
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