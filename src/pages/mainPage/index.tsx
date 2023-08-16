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
			<BlockItems />
			<News />
			<ContactUs />
		</div>
	</>)
}


export default MainPage