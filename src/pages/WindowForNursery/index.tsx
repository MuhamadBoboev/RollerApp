import Banner from "../../components/Banner"
import Statistics from "../../components/Statistics"
import Timeline from "../../components/Timeline"
import { IBanner } from "../../models/IBanner"
import { ITimeline } from "../../models/ITimeline"
import img_1 from './img_1.png'
const dateTimelineItems: ITimeline[] = [
	{
		key: 1,
		title: 'Защитная фурнитура',
		// subtitle: 'на рынке Таджикистана',
		text: 'За годы работы мы реализовали более 120 производственных проектов под ключ. Качество продукции подтверждено Международным сертификатом ISO 9001',
	}, {
		key: 2,
		title: 'Стекла триплекс ',
		subtitle: 'стеклопакет',
		text: 'Мы разработали профили специально для Среднеазиатского региона, сохранив европейские стандарты качества на всех участках производства. Разветвленная филиальная сеть охватывает всю территорию Таджикистана.',
	}, {
		key: 3,
		title: 'Комфортный микроклимат',
		// subtitle: 'оборудование',
		text: 'Завод оснащен современным австрийским и немецким оборудованием GREINER EXTRUSION и Krauss Maffei',
	}
]
const bannerDate: IBanner = {
	title: 'ОКНО ДЛЯ ДЕТСКОЙ',
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  ',
	image: img_1,
	link: 'Бесплатный замер'
}
interface Props {
	banner: IBanner
}
const WindowForNursery = () => {
	return (<>
		<Banner banner={bannerDate} />
		<Timeline
			imgDisplay={false}
			items={dateTimelineItems}
			subtitleMain='Основные преимущества'
			titleMain='ЧТО ДЕЛАЕТ ОКНО ROLLER	САМЫМ ЭФФЕКТИВНЫМ ДЛЯ ДЕТСКОЙ?'
		/>
		<Statistics />
	</>)
}
export default WindowForNursery