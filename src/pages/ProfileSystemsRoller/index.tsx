import OtherBanner from "../../components/OtherBanner"
import { IBanner } from "../../models/IBanner"
import fotoBanner from './other_banner_5.jpg'
import Сharacteristics from './Сharacteristics'
import { IСharacteristicsCategories } from '../../models/IСharacteristicsCategories'
import foto_1 from './Сharacteristics/roller_ch.svg'
import foto_2 from './Сharacteristics/unopen_ch.svg'
import foto_3 from './Сharacteristics/econline_ch.svg'
import BlockItems from "../../components/BlockItems"
import { IBlockItems } from "../../models/IBlockItems"
import img_1 from './iblock_1.svg'
import img_2 from './iblock_2.svg'
import img_3 from './iblock_3.svg'
import img_4 from './iblock_4.svg'
import Lamination from "../../components/Lamination"
const dateBanner: IBanner = {
	image: fotoBanner,
	title: 'Профильные Системы ROLLER',
	text: 'Системы профилей NURPLAST — это надёжность, качество	и доступность. Это тёплое решение для уюта в каждом доме. Это профиль, которому доверяют!',
}
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

const dateItemsBlocks: IBlockItems[] = [
	{
		image: img_1,
		name: 'Энерго эффективность',
		text: 'Стабильная многокамерная система с превосходными	изолирующими характеристиками',
	}, {
		image: img_2,
		name: 'Защита от шума',
		text: 'Высокая шумоизоляция обеспечивает тишину и спокойствие Вашего дома',
	}, {
		image: img_3,
		name: 'Дизайн и долговечность',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
	}, {
		image: img_4,
		name: 'Прочность и надёжность',
		text: 'Использование специальных армирующих	усилителей обеспечивает высокую	стабильность конструкции',
	}
]
const ProfileSystemsRoller = () => {
	return (<>
		<OtherBanner banner={dateBanner} />
		<Сharacteristics props={dateCharacteristics} />
		<BlockItems title='НАШИ ПРОФИЛИ' textBottom={false} props={dateItemsBlocks} paddingTop150 />
		<Lamination />
	</>)
}
export default ProfileSystemsRoller