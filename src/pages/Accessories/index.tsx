import OtherBanner from "../../components/OtherBanner"
import { IBanner } from "../../models/IBanner"
import { IProductInfo } from "../../models/IProductInfo"
import BlockTextImg from "../../components/BlockTextImg"

const bannerDate: IBanner = {
	title: 'КОМПЛЕКТУЮЩИЕ',
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  ',
	image: '/assets/image/accessories_banner.webp',
	link: 'Бесплатный замер'
}
const dateProductInfo1: IProductInfo = {
	image: '/assets/image/productInfo_1er.webp',
	title: 'профильные системы',
	text: 'Системы профилей ROLLER — это надёжность,	качество и доступность. Это тёплое решение для уюта в каждом доме. Это профиль, которому доверяют!',
	buttonChildren: 'Перейти',
	link: 'profile_systems_roller'
}
const dateProductInfo2: IProductInfo = {
	image: '/assets/image/productInfo_2er.webp',
	title: 'ФУРНИТУРЫ',
	text: 'Надёжность и длительный срок службы пластиковых окон зависит от используемых материалов и запчастей для окон, а также соблюдения правил установки, является также правильный выбор фурнитуры для окон.',
	buttonChildren: 'Перейти',
	link: 'fittings_page'
}
const dateProductInfo3: IProductInfo = {
	image: '/assets/image/productInfo_3er.webp',
	title: 'ОБШИВОЧНЫЙ ПЛАСТИК',
	text: 'ПВХ вспененный — листовой синтетический материал из жёсткой пены ПВХ, имеющий регулярную мелкоячеистую структуру и матовую поверхность.',
	buttonChildren: 'Перейти',
	link: 'casing_plastic_page'
}
const dateProductInfo4: IProductInfo = {
	image: '/assets/image/productInfo_4er.webp',
	title: 'ПЛАСТИКОВЫЕ ПОДОКОННИКИ',
	text: 'Подоконники ROLLER – это эксклюзивные решение для вашего дома! Подоконники ROLLER серии Premium не оставят Вас равнодушными!',
	buttonChildren: 'Перейти',
	link: 'plastic_window'
}
const Accessories = () => {
	return (<>
		<OtherBanner banner={bannerDate} />
		<BlockTextImg props={dateProductInfo1} imgSideLeft={false} />
		<BlockTextImg props={dateProductInfo2} imgSideLeft={true} />
		<BlockTextImg props={dateProductInfo3} imgSideLeft={false} />
		<BlockTextImg props={dateProductInfo4} imgSideLeft={true} />
	</>)
}
export default Accessories