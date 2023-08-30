/* ***** slider ***** */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import st from './modal.module.scss'
import close_img from './close_svg.svg'
import './modal_swiper.scss'
import { TitleSection } from '../ui/TitleSection';


interface Props {
	active: boolean,
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
	dataModal: dateModalInterface
}
interface dateModalInterface {
	imageItem: string
	titleItem: string
	textItem: string
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
							<img className={st.closeBtn} src={close_img} width={27.5} height={27.5} ></img>
						</div>
						<div className={st.content}>
							<div className={st.modal_swiper}>
								<div className={st.sl__wrapper} >
									<div className={st.body} >
										<div className={st.sl__img} >
											<img
												width={380}
												height={300}
												src={dataModal.imageItem}
												alt='news'
											/>
										</div>
										<div className={st.block_text} >
											<TitleSection textAlign='center' children={dataModal.titleItem} />
											<p className={st.text} >
												{dataModal.textItem}
											</p>
										</div>
									</div>
								</div>
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