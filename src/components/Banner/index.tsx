import st from './banner.module.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import OtherBanner from '../OtherBanner';
import { IBanner } from '../../models/IBanner';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
	banner: IBanner
}

const Banner = ({ banner }: Props) => {
	return (
		<div >
			<div className={st.banner}>
				<Swiper
					className={st.swiper__lib}
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{
						clickable: true,
						enabled: true,
						clickableClass: `${st.vertical_Class}`,
						bulletClass: `${st.bullet}`,
						bulletActiveClass: `${st.bulletActive}`,
					}}
					scrollbar={{ draggable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
				>
					<SwiperSlide><OtherBanner banner={banner} /></SwiperSlide>
					<SwiperSlide><OtherBanner banner={banner} /></SwiperSlide>
					<SwiperSlide><OtherBanner banner={banner} /></SwiperSlide>
					<SwiperSlide><OtherBanner banner={banner} /></SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}
export default Banner