import { Text } from '../../../components/ui/Text'
import { TitleSection } from '../../../components/ui/TitleSection'
import st from './contacts.module.scss'
import { motion } from 'framer-motion'

import MapMain from '../../../components/Map'
import Container from '../../../components/Container'
const Contacts = () => {
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
	return (<>
		<Container className={st.container} >
			<div className={st.contacts} >
				<div className={st.contacts__bl_title}>
					<TitleSection textAlign='center' children='Контакты' />
					<div className={st.contacts__bl_title__text}>
						<Text textAlign='center' children='Доступность в каждом регионе — Постоянно расширяющаяся дилерская сеть. Доставка продукции по всей территории Республики Таджикистан.' />
					</div>
				</div>
				<div className={st.items} >
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.item + ' ' + st.item_1} >
						<div className={st.body} >
							<div className={st.info} >
								<div className={st.info__}>
									<p className={st.info__title} >Головной офис</p>
									<Text children='Душанбе, Таджикистан' />
								</div>
								<div className={st.info__block} >
									<div className={st.info__item} >
										<div className={st.info__img_bl} >
											<img src={'/assets/image/location_svg.svg'} width={20} height={20}  ></img>
										</div>
										<a href='улица Мирали Махмадали 88' className={st.info_text} >
											улица Мирали Махмадали 88
										</a>
									</div>
									<div className={st.info__item} >
										<div className={st.info__img_bl} >
											<img src={'/assets/image/tell_svg.svg'} width={20} height={20}  ></img>
										</div>
										<a className={st.info__link} href='tel:+992 700-600-700' >
											+992 700-600-700
										</a>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.item + ' ' + st.item_2} >
						<div className={st.body} >
							<div className={st.info} >
								<p className={st.info__title} >Отдел продаж</p>
								<div className={st.info__block} >
									<div className={st.info__item} >
										<div className={st.info__img_bl} >
											<img src={'/assets/image/tell_svg.svg'} width={20} height={20}  ></img>
										</div>
										<a className={st.info__link} href='tel:+992 700-600-700' >
											+992 700-600-700
										</a>
									</div>
									<div className={st.info__item} >
										<div className={st.info__img_bl} >
											<img src={'/assets/image/mail_svg.svg'} width={20} height={20}  ></img>
										</div>
										<a href='mailto:yuldoshev@roller.tj' className={st.info_text} >
											yuldoshev@roller.tj
										</a>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.item + ' ' + st.item_3} >
						<div className={st.body} >
							<div className={st.info} >
								<p className={st.info__title} >Бухгалтерия</p>
								<div className={st.info__block} >
									<div className={st.info__item} >
										<p className={st.info_text} >
											<span className={st.info_span} >Рабочие дни:&nbsp; </span>
											Понедельник - Суббота (09:00 до 17:00)
										</p>
									</div>
									<div className={st.info__item} >
										<div className={st.info__img_bl} >
											<img src={'/assets/image/tell_svg.svg'} width={20} height={20}  ></img>
										</div>
										<a className={st.info__link} href='tel:+992 700-600-700' >
											+992 700-600-700
										</a>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
					<div className={st.item__map}>
						<MapMain />
					</div>
				</div>
			</div>
		</Container >
	</>)
}

export default Contacts