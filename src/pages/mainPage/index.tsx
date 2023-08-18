import BlockItems from "../../components/BlockItems"
import OurServices from "../../components/OurServices"
import Products from "../../components/Products"
import AboutUs from "./AboutUs"
import AdvantageChoice from "./AdvantageChoice"
import Banner from "./Banner"
import Brands from "./Brands"
import ContactUs from "./ContactUs"
import News from "./News"
// import OurServices from "./OurServices"
import Partners from "./Partners"
import PhotoGallery from "./PhotoGallery"
import ProductsContainer from "./Products/ProductContainer"
import SwiperComponent from "./Swiper"
import { IBlockItems } from '../../models/IBlockItems'
import img_1 from './iblock_1.svg'
import img_2 from './iblock_2.svg'

const dateItemsBlocks: IBlockItems[] = [
	{
		image: img_1,
		name: 'Доставка',
		text: 'Осуществлять доставку груза в любой регион Таджикистана за рекордно короткий срок.',
	}, {
		image: img_2,
		name: 'Гарантия',
		text: 'НУРПЛАСТ гарантирует своим клиентам и партнерам бесперебойные поставки продукции, независимо от расстояния и воздействия сезонных факторов',
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
			<Products />
			{/* <ProductsContainer /> */}
			{/* <OurServices /> */}
			<PhotoGallery />
			<OurServices />
			<BlockItems title='ДАННАЯ УСЛУГА ПОЗВОЛЯЕТ:' textBottom={true} props={dateItemsBlocks} />
			<News />
			<ContactUs />
		</div>
	</>)
}


export default MainPage