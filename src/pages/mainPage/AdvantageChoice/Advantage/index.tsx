import { Link } from 'react-router-dom'
import st from './advantage.module.scss'
import advantage_1 from './img/advantage_1.svg'
import advantage_2 from './img/advantage_2.svg'
import advantage_3 from './img/advantage_3.svg'
import advantage_4 from './img/advantage_4.svg'
import advantage_5 from './img/advantage_5.svg'
import { motion } from 'framer-motion'
import { BigTitleSection } from '../../../../components/ui/BigTitleSection'
import { Scrollbar } from 'swiper/modules';

interface AdvantageInterface {
	img: any;
	title: string;
	link: string
	text: string
}
const advantageDate: AdvantageInterface[] = [
	{
		img: advantage_1,
		title: 'Опыт',
		text: '17 лет опыта на рынке Таджикистана',
		link: 'aboutCompany'
	}, {
		img: advantage_2,
		title: 'Стандарты',
		text: 'Европейские стандарты исполнения',
		link: 'aboutCompany'
	}, {
		img: advantage_3,
		title: 'Ламинация',
		text: 'Высокое качество ламинации от  Renolit',
		link: 'aboutCompany'
	}, {
		img: advantage_4,
		title: 'Качество',
		text: 'Мы даем от 15 лет гарантии на наши системы ПФХ',
		link: 'aboutCompany'
	}, {
		img: advantage_5,
		title: 'Оборудование',
		text: 'Современное, немецкое и турецкое оборудование по международным стандартам',
		link: 'aboutCompany'
	}
]
const imgVariants = {
	hidden: {
		opacity: 0,
		x: 20,
		scale: 0.5
	},
	animate: (i: number) => ({
		opacity: 1,
		scale: 1,
		x: 0,
		transition: {
			delay: (i + 1) * 0.1,
		}
	})
}

const Advantage = () => {
	return (<div className={st.advantage} >
		{/* <h2 className={'text_h2 ' + st.advantage_main_title} >
			Преимущества
		</h2> */}
		<BigTitleSection>Преимущества</BigTitleSection>
		<ul className={st.advantage_wrapper} >
			{advantageDate.map((el, index) =>
				<li className={st.advantage__item} >
					<motion.div
						initial="hidden"
						whileInView="animate"
						custom={index}
						variants={imgVariants}
						className={st.advantage__item_body} >
						<div className={st.advantage__item__top} >
							<p className={st.advantage__text}>
								{el.title}
							</p>
							<div className={st.advantage__text_block} >
								<p className={st.text} >{el.text}</p>
								<div className={st.advantage__bl_img} >
									<img src={el.img} width={62} height={62} ></img>
								</div>
							</div>
						</div>
						{/* <div className={st.advantage__bl_link} >
							<Link to={el.link} className={st.advantage__link} >Подробнее</Link>
						</div> */}
					</motion.div>
				</li>
			)}
		</ul>
		<div className={st.fon} >
			<img src='/assets/image/advantage_fon.svg' />
		</div>
	</div>)
}
export default Advantage;