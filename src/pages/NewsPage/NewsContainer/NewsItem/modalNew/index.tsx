/* ***** slider ***** */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import st from './modal.module.scss'
import close_img from './close_svg.svg'
import './modal_swiper.scss'
import { TitleSection } from '../../../../../components/ui/TitleSection';


interface Props {
	active: boolean,
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
	dataModal: dateModalInterface[]
}
interface dateModalInterface {
	image: string
	title: string
	text: string
}

/* ***** ***** */
const ComponentModalNew = ({ active, setActive, dataModal }: Props) => {
	return (<>
		<div
			className={active ? st.wrapper + ' ' + st.active : st.wrapper}>
			<div className={st.block__center} >
				<div className={st.modal} >
					<div className={st.modal_body}>
						<div className={st.close} onClick={(event) => {
							event.stopPropagation()
							event.preventDefault()
							setActive(false)
						}}>
							<img className={st.closeBtn} src={'./assets/image/close_svg.svg'} width={27.5} height={27.5} ></img>
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
															alt='news'
														/>
													</div>
													<div className={st.block_text} >
														<TitleSection textAlign='center' children={el.title} />
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
			</div>
			<div className={st.modal__fon} onClick={(event) => {
				event.stopPropagation()
				event.preventDefault()
				setActive(false)
			}}>d</div>
		</div>
	</>)
}

export default ComponentModalNew