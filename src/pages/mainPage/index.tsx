import BlockItems from "../../components/BlockItems"
import OurServices from "../../components/OurServices"
import Products from "../../components/Products"
import AboutUs from "./AboutUs"
import AdvantageChoice from "./AdvantageChoice"
import Banner from "./Banner"
import Brands from "./Brands"
import ContactUs from "./ContactUs"
import News from "./News"
import Partners from "./Partners"
import PhotoGallery from "./PhotoGallery"
import SwiperComponent from "./Swiper"
import { IBlockItems } from '../../models/IBlockItems'

const dateItemsBlocks: IBlockItems[] = [
	{
		image: '/assets/image/iblock_1.svg',
		name: 'Доставка',
		text: 'Осуществлять доставку груза в любой регион Таджикистана за рекордно короткий срок.',
	}, {
		image: '/assets/image/iblock_2.svg',
		name: 'Гарантия',
		text: 'Роллер гарантирует своим клиентам и партнерам бесперебойные поставки продукции, независимо от расстояния и воздействия сезонных факторов',
	}
]

const MainPage = () => {
	return (<>
		<div className='wrapper' >
			<Banner />
			<AboutUs />
			<AdvantageChoice />
			<Partners />
			<SwiperComponent />
			<Brands />
			{/* <Products /> */}
			<PhotoGallery />
			<OurServices />
			{/* <BlockItems title='ДАННАЯ УСЛУГА ПОЗВОЛЯЕТ:' textBottom={true} props={dateItemsBlocks} /> */}
			<News />
			<ContactUs />
		</div>
	</>)
}


export default MainPage