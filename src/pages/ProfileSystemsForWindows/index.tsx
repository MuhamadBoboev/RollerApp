import OtherBanner from "../../components/OtherBanner"
import ProductInfo from "../../components/ProductInfo"
import { IBanner } from "../../models/IBanner"
import { IProductInfo } from "../../models/IProductInfo"

const bannerDate: IBanner = {
	title: 'ПРОФИЛЬНЫЕ СИСТЕМЫ ДЛЯ ОКОН',
	text: 'У нас вы найдете:	оконные профили,	балконные и лоджийные системы,	профили для межкомнатных дверей и перегородок.	Наши профили обеспечивают идеальную теплоизоляцию и сохранение тепла в любое время года.',
	image: '/assets/image/products_banner.webp',
	link: 'Бесплатный замер'
}
const dateProductInfo1: IProductInfo = {
	image: '/assets/image/productsInfoImage_1.webp',
	title: 'ПРОСТОЕ ОКНО',
	text: 'Если вам необходимо недорогое,	но качественное решение для остекления.',
	buttonChildren: 'Перейти',
	link: '/products/profile_systems_for_windows/simple_window'
}
const dateProductInfo2: IProductInfo = {
	image: '/assets/image/productsInfoImage_2.webp',
	title: 'ЭНЕРГОЭФФЕКТИВНОЕ ОКНО',
	text: 'Энергоэффективные пластиковые окна сохраняют микроклимат внутри помещения, уменьшают расходы на отопление зимой и на кондиционирование летом.',
	buttonChildren: 'Перейти',
	link: '/products/profile_systems_for_windows/energy_efficient_window'
}
const dateProductInfo3: IProductInfo = {
	image: '/assets/image/productsInfoImage_3.webp',
	title: 'шумозащитнОЕ окнО',
	text: 'Мы рекомендуем это решение для квартир и коттеджей, находящихся в непосредственной близости от автомагистралей, дорог с оживлённым движением, аэропортов и прочих источников шума.',
	buttonChildren: 'Перейти',
	link: '/products/profile_systems_for_windows/sound_protection_window'
}
const dateProductInfo4: IProductInfo = {
	image: '/assets/image/productsInfoImage_4.webp',
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