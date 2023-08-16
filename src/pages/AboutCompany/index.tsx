import BlockInfo from "../../components/BlockInfo"
import FormMain from "../../components/FormMain"
import MainBanner from "../../components/MainBanner"
import Timeline from "../../components/Timeline"
import { IBlockInfo } from "../../models/IBlockInfo"
import BannerCompany from "./BannerCompany"
import QualityRoller from "./QualityRoller"
import ReviewsSlider from "./ReviewsSlider"
import block_info_img_1 from './block_info_1.jpg'
import block_info_img_2 from './block_info_2.png'
import block_info_img_3 from './block_info_3.png'
import { TextProps } from '../../components/ui/Text/TextProps';
import { ITimeline } from '../../models/ITimeline';
import fotoBanner from '../../pages/AboutCompany/BannerCompany/companyBanner.jpg'
import foto1 from '../../components/Timeline/img/briefcase_1.svg'
import foto2 from '../../components/Timeline/img/briefcase_2.svg'
import foto3 from '../../components/Timeline/img/briefcase_3.svg'
import foto4 from '../../components/Timeline/img/briefcase_4.svg'
import foto5 from '../../components/Timeline/img/briefcase_5.svg'
import { IBanner } from "../../models/IBanner"
import { IReviewsSlider } from "../../models/IReviewsSlider"

const dateBlockInfo1: IBlockInfo = {
	subtitle: 'О компании',
	title: 'ИСТОРИЯ РАЗВИТИЯ КОМПАНИИ',
	text: 'ROLLER был основан в 2006 и является первым производителем материалов из ПВХ в Таджикистане и сегодня наша компания является одним из лидеров по производству профилей для окон и дверей ПВХ, обшивочных пластик, канализационных труб, кабель-каналов в республике.За годы работы наша компания зарекомендовала себя как надёжная и опытная организация, в которой работают профессионалы своего дела. Мы выполняем как частные, так и оптовые заказы. ',
	image: block_info_img_1,
	// variant: 'first',
}
const dateBlockInfo2: IBlockInfo = {
	subtitle: 'Остекление',
	title: 'Профиль roller',
	text: 'Производитель пластикового профиля для остекления жилых и офисных помещений компания ROLLER предлагает широкий выбор вариантов профиля ПВХ. Мы предлагаем системы профилей для пластикового остекления окон, балконов, лоджий, мансард, а также современные решения для монтажа межкомнатных дверей, офисных перегородок и тамбуров. Наши профили идеальны для зимнего остекления и позволяют сохранить тепло даже самой суровой зимой.',
	image: block_info_img_2,
	// variant: 'second',
}
const dateBlockInfo3: IBlockInfo = {
	// subtitle: 'О компании',
	title: 'ПРЕИМУЩЕСТВА',
	titleRed: 'roller',
	text: 'ROLLER был основан в 2006 и является первым производителем материалов из ПВХ в Таджикистане и сегодня наша компания является одним из лидеров по производству профилей для окон и дверей ПВХ, обшивочных пластик, канализационных труб, кабель-каналов в республике.За годы работы наша компания зарекомендовала себя как надёжная и опытная организация, в которой работают профессионалы своего дела. Мы выполняем как частные, так и оптовые заказы. ',
	image: block_info_img_3,
	lastText: 'Системы профилей ROLLER — это надёжность, качество и доступность. Это тёплое решение для уюта в каждом доме. Это профиль, которому доверяют!'
	// variant: 'first',
}
const dateTimelineItems: ITimeline[] = [
	{
		key: 1,
		title: 'Большой опыт',
		subtitle: 'на рынке Таджикистана',
		text: 'За годы работы мы реализовали более 120 производственных проектов под ключ. Качество продукции подтверждено Международным сертификатом ISO 9001',
		image: foto1,
	}, {
		key: 2,
		title: 'Европейские стандарты',
		subtitle: 'исполнения',
		text: 'Мы разработали профили специально для Среднеазиатского региона, сохранив европейские стандарты качества на всех участках производства. Разветвленная филиальная сеть охватывает всю территорию Таджикистана.',
		image: foto2
	}, {
		key: 3,
		title: 'Современное',
		subtitle: 'оборудование',
		text: 'Завод оснащен современным австрийским и немецким оборудованием GREINER EXTRUSION и Krauss Maffei',
		image: foto3
	}, {
		key: 4,
		title: 'Высокое качество',
		subtitle: 'ламинации',
		text: 'В производестве окрашенных в массе ПВХ профилей используется технологический процесс и оборудование ведущих немецких компаний',
		image: foto4
	}, {
		key: 5,
		title: 'Гарантия 15 лет',
		subtitle: 'на весь ассортимент',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehenderit dolor in reprehenderit in voluptate',
		image: foto5
	}
]
const bannerDate: IBanner = {
	title: 'КОМПАНИЯ ROLLER',
	text: 'один из национальных лидеров в области разработки и производства оконных и дверных систем из высококачественного пластика',
	image: fotoBanner
}
const dateReviewsSlider: IReviewsSlider[] = [
	{
		text: 'Недорогие окна, хорошего качества.	Самое главное нет шума, хорошая звукоизоляция. Всем советую ROLLER  и обслуживание на высшем уровне',
		image: './profile_foto.jpg',
		name: 'Саймумин Мардонов',
		job: 'учитель ТНУ'
	}, {
		text: 'Недорогие окна, хорошего качества.	Самое главное нет шума, хорошая звукоизоляция. Всем советую ROLLER  и обслуживание на высшем уровне',
		image: './profile_foto.jpg',
		name: 'Саймумин Мардонов',
		job: 'учитель ТНУ'
	}, {
		text: 'Недорогие окна, хорошего качества.	Самое главное нет шума, хорошая звукоизоляция. Всем советую ROLLER  и обслуживание на высшем уровне',
		image: './profile_foto.jpg',
		name: 'Саймумин Мардонов',
		job: 'учитель ТНУ'
	}, {
		text: 'Недорогие окна, хорошего качества.	Самое главное нет шума, хорошая звукоизоляция. Всем советую ROLLER  и обслуживание на высшем уровне',
		image: './profile_foto.jpg',
		name: 'Саймумин Мардонов',
		job: 'учитель ТНУ'
	}, {
		text: 'Недорогие окна, хорошего качества.	Самое главное нет шума, хорошая звукоизоляция. Всем советую ROLLER  и обслуживание на высшем уровне',
		image: './profile_foto.jpg',
		name: 'Саймумин Мардонов',
		job: 'учитель ТНУ'
	}, {
		text: 'Недорогие окна, хорошего качества.	Самое главное нет шума, хорошая звукоизоляция. Всем советую ROLLER  и обслуживание на высшем уровне',
		image: './profile_foto.jpg',
		name: 'Саймумин Мардонов',
		job: 'учитель ТНУ'
	}, {
		text: 'Недорогие окна, хорошего качества.	Самое главное нет шума, хорошая звукоизоляция. Всем советую ROLLER  и обслуживание на высшем уровне',
		image: './profile_foto.jpg',
		name: 'Саймумин Мардонов',
		job: 'учитель ТНУ'
	}
]


const AboutCompany = () => {
	return (
		<>
			<BannerCompany banner={bannerDate} />
			<BlockInfo props={dateBlockInfo1} variant='first' />
			<Timeline
				imgDisplay={true}
				items={dateTimelineItems}
				subtitleMain='Основные преимущества'
				titleMain='Почему выбирают нас?'
			/>
			<BlockInfo props={dateBlockInfo2} variant='second' />
			<BlockInfo props={dateBlockInfo3} variant='first' />
			<QualityRoller title='КАЧЕСТВО ROLLER' text='Все профили ROLLER производятся в соответствии с требованиями высшего класса качества немецкого стандарта DIN EN 12608 — класса А. Только из таких профилей можно сделать окна и двери, которые будут надёжно работать многие десятилетия, радуя Вас своим великолепным внешним видом и удобством использования. 100% качества профиля — чтобы Ваши окна дарили Вам радость.' />
			<ReviewsSlider title='Отзывы' subtitle="Вот что о нас говорят клиенты" items={dateReviewsSlider} />

			<FormMain
				titleChildren='свяжитесь с нами'
				textChildren="Отправьте онлайн форму для заказа и в течении дня Вам позвонят"
			/>

		</>
	)
}
export default AboutCompany