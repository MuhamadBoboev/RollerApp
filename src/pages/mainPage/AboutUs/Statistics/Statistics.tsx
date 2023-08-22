import st from './statistics.module.scss'

interface InterfaceDate {
	img: any; quantity: string; title: string
}
const ArrayDate: InterfaceDate[] = [
	{
		img: '/assets/image/statistics_1.svg',
		quantity: '2487+',
		title: 'Довольных клиентов'
	}, {
		img: '/assets/image/statistics_2.svg',
		quantity: '8487+',
		title: 'Собрано оконных рам'
	}, {
		img: '/assets/image/statistics_3.svg',
		quantity: '13 лет',
		title: 'Клиенты работают с нами'
	}
]

const Statistics = () => {
	return (<div className={st.statistics_section}>
		<div className={'_container ' + st.statistics} >
			<ul className={st.statistics__wrapper}>
				{ArrayDate.map((el) => <li className={st.statistics__item} >
					<div className={st.statistics__item_body}>
						<div className={st.statistics__img} >
							<img src={el.img} width={64} height={64} alt='svg'></img>
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