import { Link } from 'react-router-dom'
import st from './footer.module.scss'
import logoFooter from './img/footer_logo.svg'
import socialLogo_1 from './img/socialLogo_1.svg'
import socialLogo_2 from './img/socialLogo_2.svg'
import socialLogo_4 from './img/socialLogo_4.svg'
import socialLogo_5 from './img/socialLogo_5.svg'

const Footer = () => {
	return (<section className={'padding_top_150 ' + st.footer} >
		<div className={st.footer__wrapper}>
			<div className={'_container ' + st.container} >
				<div className={st.footer__body} >
					<div className={st.footer__bl_first}>
						<Link to='/' className={st.footer__bl_logo}>
							<img className={st.footer__logo} src={logoFooter} width={222} height={48} alt='Логотип сайта' ></img>
						</Link>
						<div className={st.footer__link_items} >
							<Link to='/' className={st.footer__h4} ><h4>Главная</h4></Link>
							<ul className={st.footer__links} >
								<li className={st.footer__li} >
									<Link to='brands' className={st.footer__link} >
										Бренды
									</Link>
								</li>
								<li className={st.footer__li} >
									<Link to='our_services' className={st.footer__link} >
										Услуги
									</Link>
								</li>
								<li className={st.footer__li} >
									<Link to='products' className={st.footer__link} >
										Продукция
									</Link>
								</li>
								<li className={st.footer__li} >
									<Link to='news' className={st.footer__link} >
										Новости
									</Link>
								</li>
							</ul>
						</div>

					</div>
					<div className={st.footer___bl_second}>
						<h3 className={st.footer__h3} >
							Адрес
						</h3>
						<div className={st.footer__adress_bl}>
							<p className={'text ' + st.footer____text} >
								г. Душанбе <br></br>улица Мирали Махмадали 88
							</p>
							<a href='https://yandex.ru/maps/float,float' className={st.footer__map} >
								Показать на карте
							</a>
						</div>
					</div>
					<div className={st.footer__bl_three} >
						<h4 className={st.footer__h4} >
							Связаться с нами:
						</h4>
						<ul className={st.footer__socials} >
							<li className={st.footer__social} >
								<a href='https://www.facebook.com/profile.php?id=100093955908004' className={st.footer__social_link}>
									<img src={socialLogo_1} ></img>
								</a>
							</li>
							<li className={st.footer__social} >
								<a href='https://www.instagram.com/roller.tj/' className={st.footer__social_link}>
									<img src={socialLogo_2} ></img>
								</a>
							</li>
							{/* <li className={st.footer__social} >
								<a href='' className={st.footer__social_link}>
									<img src={socialLogo_3} ></img>
								</a>
							</li> */}
							<li className={st.footer__social} >
								<a href='' className={st.footer__social_link}>
									<img src={socialLogo_4} ></img>
								</a>
							</li>
							<li className={st.footer__social} >
								<a href='' className={st.footer__social_link}>
									<img src={socialLogo_5} ></img>
								</a>
							</li>
						</ul>
					</div>
					<div className={st.footer__bl_four} >
						<h3 className={st.footer__h3} >
							Контакты
						</h3>
						<ul className={st.footer__contacts} >
							<li className={st.footer__contact_item} >
								<a href='tel:+992 700-600-700' className={'text ' + st.footer__contact_link} >
									+992 700-600-700
								</a>
							</li>
							<li className={st.footer__contact_item} >
								<a href='mailto:info@roller.tj' className={'text ' + st.footer__contact_link} >
									info@roller.tj
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className={st.footer__bottom} >
			<div className={'_container ' + st.bottom__container} >
				<p className={st.bottom__text} >
					©&nbsp;All&nbsp;rights&nbsp;reserved&nbsp;by&nbsp;ROLLER&nbsp;Development
				</p>
				<a href='' className={st.bottom__logo} >
					DEVELOPED&nbsp;BY&nbsp;<span className={st.bottom__red}>BO</span>/BO
				</a>
			</div>
		</div>
	</section>)
}

export default Footer