import st from './statistics.module.scss'
import { motion } from 'framer-motion'

interface InterfaceDate {
	img: any;
	quantity: string;
	title: string
}
const ArrayDate: InterfaceDate[] = [
	{
		img: '/assets/image/statistics_1.svg',
		quantity: 'Прочность и надёжность',
		title: 'Использование специальных армирующих усилителей обеспечивает высокую стабильность конструкции'
	}, {
		img: '/assets/image/statistics_2.svg',
		quantity: 'Защита от шума',
		title: 'Высокая шумоизоляция обеспечивает тишину и спокойствие Вашего дома'
	}, {
		img: '/assets/image/statistics_3.svg',
		quantity: 'Энерго- эффективность',
		title: 'Стабильная многокамерная система с превосходными изолирующими характеристикамии'
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
						className={st.statistics__item_body}>
						<div className={st.statistics__img} >
							<img src={el.img} ></img>
						</div>
						<div className={st.statistics__text_bl}>
							<p className={st.statistics__title}>
								{el.quantity}
							</p>
							<p className={st.statistics__text}>
								{el.title}
							</p>
						</div>
					</motion.div>
				</li>)}
			</ul>
		</div>
	</div>)
}

export default Statistics