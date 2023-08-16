import { Text } from '../../../components/ui/Text'
import { TitleSection } from '../../../components/ui/TitleSection'
import st from './contacts.module.scss'
import tell from './img/tell_svg.svg'
import location from './img/location_svg.svg'
import mail from './img/mail_svg.svg'
import MapMain from '../../../components/Map'
const Contacts = () => {
	return (<>
		<div className={'_container ' + st.container} >
			<div className={st.contacts} >
				<div className={st.contacts__bl_title}>
					<TitleSection textAlign='center' children='Контакты' />
					<div className={st.contacts__bl_title__text}>
						<Text textAlign='center' children='Доступность в каждом регионе — Постоянно расширяющаяся дилерская сеть. Доставка продукции по всей территории Республики Таджикистан.' />
					</div>
				</div>
				<div className={st.items} >
					<div className={st.item + ' ' + st.item_1} >
						<div className={st.body} >
							<div className={st.info} >
								<div className={st.info__}>
									<p className={st.info__title} >Головной офис</p>
									<Text children='Душанбе, Таджикистан' />
								</div>
								<div className={st.info__block} >
									<div className={st.info__item} >
										<div className={st.info__img_bl} >
											<img src={location} width={20} height={20}  ></img>
										</div>
										<p className={st.info_text} >
											улица Мирали Махмадали 88
										</p>
									</div>
									<div className={st.info__item} >
										<div className={st.info__img_bl} >
											<img src={tell} width={20} height={20}  ></img>
										</div>
										<a className={st.info__link} href='tel:+992 700-600-700' >
											+992 700-600-700
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={st.item + ' ' + st.item_2} >
						<div className={st.body} >
							<div className={st.info} >
								<p className={st.info__title} >Отдел продаж</p>
								<div className={st.info__block} >
									<div className={st.info__item} >
										<div className={st.info__img_bl} >
											<img src={tell} width={20} height={20}  ></img>
										</div>
										<a className={st.info__link} href='tel:+992 700-600-700' >
											+992 700-600-700
										</a>
									</div>
									<div className={st.info__item} >
										<div className={st.info__img_bl} >
											<img src={mail} width={20} height={20}  ></img>
										</div>
										<p className={st.info_text} >
											yuldoshev@roller.tj
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={st.item + ' ' + st.item_3} >
						<div className={st.body} >
							<div className={st.info} >
								<p className={st.info__title} >Бухгалтерия</p>
								<div className={st.info__block} >
									<div className={st.info__item} >
										<p className={st.info_text} >
											<span className={st.info_span} >Рабочие дни:&nbsp; </span>
											улица Мирали Махмадали 88
										</p>
									</div>
									<div className={st.info__item} >
										<div className={st.info__img_bl} >
											<img src={tell} width={20} height={20}  ></img>
										</div>
										<a className={st.info__link} href='tel:+992 700-600-700' >
											+992 700-600-700
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={st.item__map}>
						<MapMain />
					</div>
				</div>
			</div>
		</div >
	</>)
}

export default Contacts