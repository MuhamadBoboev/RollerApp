/* ***** slider ***** */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import st from './modal.module.scss'
import './modal_swiper.scss'
import { TitleSection } from '../../../../components/ui/TitleSection';


interface Props {
	active: boolean,
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
	dataModal: dateMpdalInterface[]
}
interface dateMpdalInterface {
	image: string
	title: string
	text: string
}

/* ***** ***** */
const ComponentModal = ({ active, setActive, dataModal }: Props) => {
	return (<>
		<div
			className={active ? st.wrapper + ' ' + st.active : st.wrapper}>
			<div className={st.modal} >
				<div className={st.modal_body}>
					<div className={st.close} onClick={(event) => {
						event.stopPropagation()
						event.preventDefault()
						setActive(false)
					}}>
						<img className={st.closeBtn + ' ' + st.closeBtn_dekstop} src={'./assets/image/close_svg.svg'} width={27.5} height={27.5} ></img>
						<img className={st.closeBtn + ' ' + st.closeBtn_mobile} src={'./assets/image/close_mobile.svg'} width={20} height={20} ></img>
					</div>
					<div className={st.content}>
						<div className={st.modal_swiper}>
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
								scrollbar={{ draggable: true }}>
								{dataModal.map((el) =>
									<SwiperSlide>
										<div className={st.sl__wrapper} >
											<div className={st.body} >
												<div className={st.sl__img} >
													<img
														width={380}
														height={500}
														src={el.image}
														alt='image'
													></img>
												</div>
												<div className={st.block_text} >
													<TitleSection children={el.title} />
													<p className={st.text} >
														{el.text}
													</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
								)}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
			<div className={st.modal__fon} onClick={(event) => {
				event.stopPropagation()
				event.preventDefault()
				setActive(false)
			}}></div>
		</div>
	</>)
}

export default ComponentModal