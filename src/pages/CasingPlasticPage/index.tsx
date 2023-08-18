import { IBanner } from "../../models/IBanner"
import { IСharacteristicsCategories } from '../../models/IСharacteristicsCategories'
import foto_1 from './Сharacteristics/roller_ch.svg'
import foto_2 from './Сharacteristics/unopen_ch.svg'
import foto_3 from './Сharacteristics/econline_ch.svg'
import Lamination from "../../components/Lamination"
import Banner from "../../components/Banner"
import img_banner_1 from './img_banner_1.jpg'
import img from './img_321.jpg'
import BlockInfoFittings from "../../components/BlockInfoFittings"
import { IBlockInfoFittings } from "../../models/IBlockInfoFittings"
import Description from "./Description"
import Table from "./Table"

const dateCharacteristics: IСharacteristicsCategories[] = [
	{
		name: 'roller',
		id: 1,
		image: foto_1,
		items: [
			{
				id: 1,
				text: 'Количество камер',
				character: '5'
			}, {
				id: 2,
				text: 'Монтажная ширина (мм)',
				character: '70'
			}, {
				id: 3,
				text: 'Толщина стеклопакета',
				character: 'от 4 до 42'
			}, {
				id: 4,
				text: 'Сопротивление теплопередаче (с установленным армированием), м²С/Вт',
				character: '0,78'
			}, {
				id: 5,
				text: 'Исполнения',
				character: 'Белое, Цветное'
			}, {
				id: 6,
				text: 'Цвета уплотнений',
				character: 'Чёрный, Серый, Карамель'
			}, {
				id: 7,
				text: 'Ширина комбинации и рама-створка в световом проеме(типовой вариант)',
				character: '118'
			}, {
				id: 8,
				text: 'Высота фальца, мм',
				character: '21'
			}, {
				id: 9,
				text: 'Материал уплотнений',
				character: 'АРТК, Силикон'
			}, {
				id: 10,
				text: 'Количество контуров уплотнения',
				character: '2'
			}
		]
	}, {
		name: 'ecoline',
		id: 2,
		image: foto_2,
		items: [
			{
				id: 1,
				text: 'Количество камер',
				character: '5'
			}, {
				id: 1,
				text: 'Монтажная ширина (мм)',
				character: '70'
			}, {
				id: 1,
				text: 'Толщина стеклопакета',
				character: 'от 4 до 42'
			}, {
				id: 1,
				text: 'Сопротивление теплопередаче (с установленным армированием), м²С/Вт',
				character: '0,78'
			}
		]
	}, {
		name: 'unopen',
		id: 3,
		image: foto_3,
		items: [
			{
				id: 1,
				text: 'Количество камер',
				character: '5'
			}, {
				id: 1,
				text: 'Монтажная ширина (мм)',
				character: '70'
			}, {
				id: 1,
				text: 'Толщина стеклопакета',
				character: 'от 4 до 42'
			}, {
				id: 1,
				text: 'Сопротивление теплопередаче (с установленным армированием), м²С/Вт',
				character: '0,78'
			}
		]
	}
]

const bannerDate: IBanner = {
	title: 'Обшивочный пластик',
	text: 'ПВХ вспененный — листовой синтетический материал из жёсткой пены ПВХ, имеющий регулярную мелкоячеистую структуру и матовую поверхность',
	image: img_banner_1,
	link: 'Бесплатный замер'
}

const dateBlockInfo: IBlockInfoFittings = {
	image: img,
	title: 'ОБШИВОЧНЫЙ ПЛАСТИК',
	text: 'Данный материал очень устойчив к различным кислотам, солям и дезинфицирующим средствам, а также к погодным условиям. Листы ПВХ вспененного не содержат в себе тяжелых металлов, не поддаются коррозии, не гигроскопичны. Достаточная жесткость и прочность на излом, относительная низкая плотность, малый вес и легкость в обработке делают листы ПВХ вспененного идеальным материалом для любых наружных и внутренних работ.',
	linkButton: 'string'
}


const CasingPlasticPage = () => {
	return (<>
		<Banner banner={bannerDate} />
		<BlockInfoFittings props={dateBlockInfo} buttonShow={true} />
		<Lamination />
		<Description />
		<Table />
	</>)
}
export default CasingPlasticPage