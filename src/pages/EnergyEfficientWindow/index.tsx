import Banner from "../../components/Banner"
import Statistics from "../../components/Statistics"
import Timeline from "../../components/Timeline"
import { IBanner } from "../../models/IBanner"
import { ITimeline } from "../../models/ITimeline"
import img_banner_1 from './img_1.jpg'
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
	title: 'ЭНЕРГОЭФФЕКТИВНОЕ ОКНО',
	text: 'Энергоэффективные пластиковые окна сохраняют микроклимат внутри помещения, уменьшают расходы на отопление зимой и на кондиционирование летом. Каждый компонент окна — рама, стеклопакет и фурнитура — вносят свой вклад в энергосбережение.',
	image: img_banner_1,
	link: 'Бесплатный замер'
}
interface Props {
	banner: IBanner
}
const EnergyEfficientWindow = () => {
	return (<>
		<Banner banner={bannerDate} />
		<Timeline
			imgDisplay={false}
			items={dateTimelineItems}
			subtitleMain='Основные преимущества'
			titleMain='ЧТО ДЕЛАЕТ ОКНО ROLLER	САМЫМ ЭФФЕКТИВНЫМ?'
		/>
		<Statistics />
	</>)
}
export default EnergyEfficientWindow