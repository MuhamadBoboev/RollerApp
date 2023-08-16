import OtherBanner from "../../components/OtherBanner"
import ProductInfoDoors from "../../components/ProductInfoDoors"
import { IBanner } from "../../models/IBanner"
import { IProductInfo } from "../../models/IProductInfo"
import fotoBanner from './img/other_banner_2.jpg'
import productsInfoImage_1 from './img/productsInfoImage_1.svg'
import productsInfoImage_2 from './img/productsInfoImage_2.jpg'
const bannerDate: IBanner = {
	title: 'ПРОФИЛЬНЫЕ СИСТЕМЫ ДЛЯ ДВЕРЕЙ',
	text: 'У нас вы найдете:	оконные профили,	балконные и лоджийные системы,	профили для межкомнатных дверей и перегородок.	Наши профили обеспечивают идеальную теплоизоляцию и сохранение тепла в любое время года.',
	image: fotoBanner,
	link: 'Бесплатный замер'
}
const dateProductInfo1: IProductInfo = {
	image: productsInfoImage_1,
	title: 'ДВЕРЬ',
	text: 'Благодаря солидной фурнитуре и надёжной конструкции, входные двери ПВХ могут использоваться в местах с повышенной проходимостью.',
	buttonChildren: 'Перейти',
	link: 'simple_window'
}
const dateProductInfo2: IProductInfo = {
	image: productsInfoImage_2,
	title: 'БАЛКОННАЯ ДВЕРЬ',
	text: 'Современная балконная дверь из профиля ROLLER выделяется не только красивым внешним видом, но и обеспечивает тепло- и шумоизоляцию комнаты и может быть выполнена в различных вариантах исполнения.',
	buttonChildren: 'Перейти',
	link: 'href'
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