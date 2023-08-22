import OtherBanner from "../../components/OtherBanner"
import ProductInfoDoors from "../../components/ProductInfoDoors"
import { IBanner } from "../../models/IBanner"
import { IProductInfo } from "../../models/IProductInfo"
const bannerDate: IBanner = {
	title: 'ПРОФИЛЬНЫЕ СИСТЕМЫ ДЛЯ ДВЕРЕЙ',
	text: 'У нас вы найдете:	оконные профили,	балконные и лоджийные системы,	профили для межкомнатных дверей и перегородок.	Наши профили обеспечивают идеальную теплоизоляцию и сохранение тепла в любое время года.',
	image: '/assets/image/other_banner_2.webp',
	link: 'Бесплатный замер'
}
const dateProductInfo1: IProductInfo = {
	image: '/assets/image/productsInfoImage_12.webp',
	title: 'ДВЕРЬ',
	text: 'Благодаря солидной фурнитуре и надёжной конструкции, входные двери ПВХ могут использоваться в местах с повышенной проходимостью.',
	buttonChildren: 'Перейти',
	link: 'door_page'
}
const dateProductInfo2: IProductInfo = {
	image: '/assets/image/productsInfoImage_22.webp',
	title: 'БАЛКОННАЯ ДВЕРЬ',
	text: 'Современная балконная дверь из профиля ROLLER выделяется не только красивым внешним видом, но и обеспечивает тепло- и шумоизоляцию комнаты и может быть выполнена в различных вариантах исполнения.',
	buttonChildren: 'Перейти',
	link: 'balcony_door_page'
}
const ProfileSystemsForDoors = () => {
	return (
		<>
			<OtherBanner banner={bannerDate} />
			<ProductInfoDoors props={dateProductInfo1} imgSideLeft={false} />
			<ProductInfoDoors props={dateProductInfo2} imgSideLeft={true} />
		</>)
}
export default ProfileSystemsForDoors