import OtherBanner from "../../components/OtherBanner"
import ProductInfo from "../../components/ProductInfo"
import { IBanner } from "../../models/IBanner"
import { IProductInfo } from "../../models/IProductInfo"
import fotoBanner from './img/other_banner.jpg'
import productsInfoImage_1 from './img/productsInfoImage_1.svg'
import productsInfoImage_2 from './img/productsInfoImage_2.svg'
import productsInfoImage_3 from './img/productsInfoImage_3.svg'
import productsInfoImage_4 from './img/productsInfoImage_4.svg'
const bannerDate: IBanner = {
	title: 'ПРОФИЛЬНЫЕ СИСТЕМЫ ДЛЯ ОКОН',
	text: 'У нас вы найдете:	оконные профили,	балконные и лоджийные системы,	профили для межкомнатных дверей и перегородок.	Наши профили обеспечивают идеальную теплоизоляцию и сохранение тепла в любое время года.',
	image: fotoBanner,
	link: 'Бесплатный замер'
}
const dateProductInfo1: IProductInfo = {
	image: productsInfoImage_1,
	title: 'ПРОСТОЕ ОКНО',
	text: 'Если вам необходимо недорогое,	но качественное решение для остекления.',
	buttonChildren: 'Перейти',
	link: '/products/profile_systems_for_windows/simple_window'
}
const dateProductInfo2: IProductInfo = {
	image: productsInfoImage_2,
	title: 'ЭНЕРГОЭФФЕКТИВНОЕ ОКНО',
	text: 'Энергоэффективные пластиковые окна сохраняют микроклимат внутри помещения, уменьшают расходы на отопление зимой и на кондиционирование летом.',
	buttonChildren: 'Перейти',
	link: '/products/profile_systems_for_windows/energy_efficient_window'
}
const dateProductInfo3: IProductInfo = {
	image: productsInfoImage_3,
	title: 'шумозащитнОЕ окнО',
	text: 'Мы рекомендуем это решение для квартир и коттеджей, находящихся в непосредственной близости от автомагистралей, дорог с оживлённым движением, аэропортов и прочих источников шума.',
	buttonChildren: 'Перейти',
	link: '/products/profile_systems_for_windows/sound_protection_window'
}
const dateProductInfo4: IProductInfo = {
	image: productsInfoImage_4,
	title: 'ОКНА ДЛЯ ДЕТСКОЙ',
	text: 'Это специальное окно сделает детскую комнату максимально безопасной. Окно открывается только на проветривание.',
	buttonChildren: 'Перейти',
	link: '/products/profile_systems_for_windows/window_for_nursery'
}
const ProfileSystemsForWindows = () => {
	return (
		<>
			<OtherBanner banner={bannerDate} />
			<ProductInfo props={dateProductInfo1} imgSideLeft={false} />
			<ProductInfo props={dateProductInfo2} imgSideLeft={true} />
			<ProductInfo props={dateProductInfo3} imgSideLeft={false} />
			<ProductInfo props={dateProductInfo4} imgSideLeft={true} />
		</>)
}
export default ProfileSystemsForWindows