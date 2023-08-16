import Map from './Map/Map'
import st from './contacts.module.scss'
import contactLogo_1 from './img/contactLogo_1.svg'
import contactLogo_2 from './img/contactLogo_2.svg'
import contactLogo_3 from './img/contactLogo_3.svg'
import contactLogo_4 from './img/contactLogo_4.svg'

import socialLogo_1 from './img/socialLogo_1.svg'
import socialLogo_2 from './img/socialLogo_2.svg'
import socialLogo_3 from './img/socialLogo_3.svg'
import socialLogo_4 from './img/socialLogo_4.svg'
import socialLogo_5 from './img/socialLogo_5.svg'

interface contactsInterface {
	img: string;
	title: string;
	adress: string;
}
const contactsDate: contactsInterface[] = [
	{	
		img: contactLogo_1,
		title: '+992 907 54-50-44',
		adress: 'Колцентр',
	}, {	
		img: contactLogo_2,
		title: 'ЗАО “Нур Пласт”, г. Душанбе',
		adress: 'улица Мирали Махмадали 88',
	}, {	
		img: contactLogo_3,
		title: 'info@nurplast.tj',
		adress: 'для клиентов любых регионов',
	}, {	
		img: contactLogo_4,
		title: 'Рабочие дни',
		adress: 'Пн - Сб: 09:00 - 18:00',
	},

]

const Contacts = () => {
	return( 
	<div className={st.contacts}>
		<h2 className={'text_h2 ' + st.contacts__title} >
			свяжитесь с нами
		</h2>
		<div className={st.contacts__title_block}>
			<p className={' text ' + st.contacts__subtitle} >
				Доступность в каждом регионе — Постоянно расширяющаяся
				дилерская сеть. Доставка продукции по всей территории 
				Республики Таджикистан.
			</p>
		</div>
		<div className={st.contacts__wrapper} >
			<div className={st.contacts__left}>
				<div className={st.contacts__map} >
					<Map/>
				</div>
			</div>
			<div className={st.contacts__right} >
				<ul className={st.contacts__block} >
					{contactsDate.map((el)=>
						<li className={st.contacts__list} >
							<a className={st.contacts__link} href=''>
								<div className={st.contacts__bl_img} >
									<div className={st.contacts__body_img} >
										<img className={st.contacts__img} src={el.img} >
										</img>
									</div>
								</div>
								<div className={st.contacts__bl_text} >
									<h4 className={st.contacts__number} >
										{el.title}
									</h4>
									<p className={'text ' + st.contacts__text} >
										{el.adress}
									</p>
								</div>
							</a>
						</li>
					)}
				</ul>
				<div className={st.social}>
					<ul className={st.social__bl_links}>
						<li className={st.social__link} >
							<a href='' className={st.social__href}>
								<img src={socialLogo_1} className={st.social__logo} ></img>
							</a>
						</li>
						<li className={st.social__link} >
							<a href='' className={st.social__href}>
								<img src={socialLogo_2} className={st.social__logo} ></img>
							</a>
						</li>
						<li className={st.social__link} >
							<a href='' className={st.social__href}>
								<img src={socialLogo_3} className={st.social__logo} ></img>
							</a>
						</li>
						<li className={st.social__link} >
							<a href='' className={st.social__href}>
								<img src={socialLogo_4} className={st.social__logo} ></img>
							</a>
						</li>
						<li className={st.social__link} >
							<a href='' className={st.social__href}>
								<img src={socialLogo_5} className={st.social__logo} ></img>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>)
}

export default Contacts