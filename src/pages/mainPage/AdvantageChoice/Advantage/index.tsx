import { Link } from 'react-router-dom'
import st from './advantage.module.scss'
import advantage_1 from './img/advantage_1.svg'
import advantage_2 from './img/advantage_2.svg'
import advantage_3 from './img/advantage_3.svg'
import advantage_4 from './img/advantage_4.svg'
import advantage_5 from './img/advantage_5.svg'

interface AdvantageInterface {
	img: any;
	title: string;
	link: string
}
const advantageDate: AdvantageInterface[] = [
	{
		img: advantage_1,
		title: 'Большой опыт на рынке Таджикистана',
		link: 'aboutCompany'
	}, {
		img: advantage_2,
		title: 'Высокое качество ламинации',
		link: 'aboutCompany'
	}, {
		img: advantage_3,
		title: 'Современное	оборудование',
		link: 'aboutCompany'
	}, {
		img: advantage_4,
		title: 'Европейские стандарты исполнения',
		link: 'aboutCompany'
	}, {
		img: advantage_5,
		title: 'Гарантия качества',
		link: 'aboutCompany'
	}
]

const Advantage = () => {
	return (<div className={st.advantage} >
		<h2 className={'text_h2 ' + st.advantage_main_title} >
			Преимущества
		</h2>
		<ul className={st.advantage_wrapper} >
			{advantageDate.map((el) =>
				<li className={st.advantage__item} >
					<div className={st.advantage__item_body} >
						<div className={st.advantage__item__top} >
							<div className={st.advantage__bl_img} >
								<img src={el.img} ></img>
							</div>
							<div className={st.advantage__text_block} >
								<p className={st.advantage__text}>
									{el.title}
								</p>
							</div>
						</div>
						<div className={st.advantage__bl_link} >
							<Link to={el.link} className={st.advantage__link} >Подробнее</Link>
						</div>
					</div>
				</li>
			)}
		</ul>
	</div>)
}
export default Advantage;