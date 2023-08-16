/* ***** slider ***** */
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
/* ********** */ 
import st from './modal.module.scss'
import { useState } from 'react';
import close_img from './close_svg.svg'
// import Swiper from 'swiper';
import foto from './sert.svg'
import './modal_swiper.scss'



/* ***** ***** */
const ComponentModal = () => {
	const [active, setActive] = useState(false)
	console.log(active)
return(<>
		<button onClick={()=>(setActive(true))}>Modale</button>
		<div 
			className={active ? st.wrapper + ' ' + st.active  : st.wrapper }>
			<div className={st.modal} >
				<div className={st.modal_body}>
					<div className={st.close} onClick={()=>setActive(false)}>
						<img className={st.closeBtn} src={close_img} width={27.5} height={27.5} ></img>
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
							<SwiperSlide>
								<div className={st.sl__wrapper} >
									<div className={st.sl__img} >
										<img 
											width={600}
											height={750}
											src={foto}
										></img>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
							<div className={st.sl__wrapper} >
								<div className={st.sl__img} >
									<img 
										width={600}
										height={750}
										src={foto}
									></img>
								</div>
							</div>
							</SwiperSlide>
							<SwiperSlide>
							<div className={st.sl__wrapper} >
								<div className={st.sl__img} >
									<img 
										width={600}
										height={750}
										src={foto}
									></img>
								</div>
							</div>
							</SwiperSlide>
						</Swiper>
						</div>
					</div>
				</div>
			</div>
			<div className={st.modal__fon} onClick={()=>setActive(false)}></div>
		</div>
	</>)
}

export default ComponentModal