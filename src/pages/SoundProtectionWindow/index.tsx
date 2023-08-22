import Banner from "../../components/Banner"
import Statistics from "../../components/Statistics"
import Timeline from "../../components/Timeline"
import { IBanner } from "../../models/IBanner"
import { ITimeline } from "../../models/ITimeline"
const dateTimelineItems: ITimeline[] = [
	{
		key: 1,
		title: 'Трёхкамерная система',
		// subtitle: 'на рынке Таджикистана',
		text: 'Классическая стабильная трехкамерная система оконных профилей с превосходными изолирующими характеристиками',
	}, {
		key: 2,
		title: 'Энергосберегающий ',
		subtitle: 'стеклопакет',
		text: 'Современный энергосберегающий стеклопакет за счет особого инновационного напыления, нанесенного на внутреннюю поверхность стекла сохраняет	тепло в помещении',
	}, {
		key: 3,
		title: 'Высокое качество',
		// subtitle: 'оборудование',
		text: 'Окна хорошего качества должны открываться и закрываться без проблем в любое время года, защищать от пыли и звуков улицы. Этой цели служит современная качественная фурнитура',
	}
]
const bannerDate: IBanner = {
	title: 'ШУМОЗАЩИТНОЕ ОКНО',
	text: 'Мы рекомендуем это решение для квартир и коттеджей, находящихся в непосредственной близости от автомагистралей, дорог с оживлённым движением, аэропортов и прочих источников шума.',
	image: '/assets/image/sound_banner.webp',
	link: 'Бесплатный замер'
}
interface Props {
	banner: IBanner
}
const SoundProtectionWindow = () => {
	return (<>
		<Banner banner={bannerDate} />
		<Timeline
			imgDisplay={false}
			items={dateTimelineItems}
			subtitleMain='Основные преимущества'
			titleMain='ЧТО ДЕЛАЕТ ОКНО ROLLER	самым эффективным средством защиты от шума?'
		/>
		<Statistics />
	</>)
}
export default SoundProtectionWindow