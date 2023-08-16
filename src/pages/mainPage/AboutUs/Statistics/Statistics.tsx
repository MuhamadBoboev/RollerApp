import st from './statistics.module.scss'
import img_1 from './img/statistics_1.svg'
import img_2 from './img/statistics_2.svg'
import img_3 from './img/statistics_3.svg'

interface InterfaceDate {
	img: any; quantity: string; title: string 
}
const ArrayDate: InterfaceDate[] = [
	{
		img: img_1,
		quantity: '2487+',
		title: 'Довольных клиентов'
	}, {
		img: img_2,
		quantity: '8487+',
		title: 'Собрано оконных рам'
	}, {
		img: img_3,
		quantity: '13 лет',
		title: 'Клиенты работают с нами'
	}
]

const Statistics = () => {
	return (<div className={st.statistics_section}>
		<div className={'_container ' + st.statistics} >
			<ul className={st.statistics__wrapper}>
				{ArrayDate.map((el)=> <li className={st.statistics__item} >
					<div className={st.statistics__item_body}>
						<div className={st.statistics__img} >
							<img src={el.img} ></img>
						</div>
						<p className={st.statistics__title}>
							{el.quantity}
						</p>
						<p className={st.statistics__text}>
							{el.title}
						</p>
					</div>
				</li>)}
			</ul>
		</div>
	</div>)
}

export default Statistics