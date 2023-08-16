import st from './reviews_slider.module.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import infoSvg from './slider_info.svg'
import { Subtitle } from '../../../components/ui/Subtitle';
import { TitleSection } from '../../../components/ui/TitleSection';
import { Text } from '../../../components/ui/Text';
import foto_people from './profile_foto.jpg'
import { DateReviews } from './DateReviews';
import { IReviewsSlider } from '../../../models/IReviewsSlider';

interface Props {
	title: string
	subtitle: string
	items: IReviewsSlider[]
}
const ReviewsSlider = ({ title, subtitle, items }: Props) => {
	return (<>
		<div className={st.reviews} >
			<div className={'_container ' + st.container} >
				<div className={st.title__block} >
					<Subtitle
						textAlign='center'
						children={title} />
					<TitleSection
						textAlign='center'
						children={subtitle} />
				</div>
				<div className={st.reviews__swiper} >
					<Swiper
						className={st.swiper__lib}
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						spaceBetween={20}
						slidesPerView={3.5}
						navigation
						pagination={{
							clickableClass: `${st.vertical_Class}`,
							enabled: true,
							clickable: true,
							bulletClass: `${st.bullet}`,
							bulletActiveClass: `${st.bulletActive}`,
						}}
						breakpoints={{
							1024: {
								slidesPerView: 3.5
							},
							768: {
								slidesPerView: 2.5
							},
							600: {
								slidesPerView: 1.5
							},
							0: {
								slidesPerView: 1
							}
						}}
					>
						{items.map((el) =>
							<SwiperSlide>
								<div className={st.slider__body}>
									<div className={st.slide_top}>
										<div className={st.slider__svg}>
											<img src={infoSvg} width={40} height={40} ></img>
										</div>
										<div className={st.block__text}>
											<Text
												children='Недорогие окна, хорошего качества.
												Самое главное нет шума, хорошая звукоизоляция. Всем советую ROLLER  и обслуживание на высшем уровне' />
										</div>
									</div>
									<div className={st.info} >
										<div className={st.info__bl_image} >
											<img src={foto_people} width={76} height={76} ></img>
										</div>
										<div className={st.info__block}>
											<p className={st.info__name}>
												{el.name}
											</p>
											<Text children={`${el.job}`} />
										</div>
									</div>
								</div>
							</SwiperSlide>
						)}
					</Swiper>
				</div>
			</div>
		</div >
	</>)
}

export default ReviewsSlider