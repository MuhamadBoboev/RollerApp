import st from './statistics.module.scss'
import { motion } from 'framer-motion'

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
	return (<div className={st.statistics_section}>
		<div className={'_container ' + st.statistics} >
			<ul className={st.statistics__wrapper}>
				{ArrayDate.map((el, index) => <li className={st.statistics__item} >
					<motion.div
						initial="hidden"
						whileInView="animate"
						custom={index}
						variants={imgVariants}
						className={st.statistics__item_body}
					>
						<div className={st.statistics__img} >
							<img src={el.img} width={64} height={64} alt='svg'></img>
						</div>
						<p className={st.statistics__title}>
							{el.quantity}
						</p>
						<p className={st.statistics__text}>
							{el.title}
						</p>
					</motion.div>
				</li>)}
			</ul>
		</div>
	</div>)
}

export default Statistics