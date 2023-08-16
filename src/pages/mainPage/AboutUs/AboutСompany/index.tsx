import st from './AboutСompany.module.scss'
import aboutСompanyImg from './AboutСompany.jpg'
import Button from '../../../../components/ui/Button'
import { NavLink } from 'react-router-dom'

const AboutСompany = () => {
	return (
		<section className={st.aboutСompany} >
			<div className={'_container ' + st.container}>
				<div className={st.aboutСompany__wrapper}>
					<div className={st.aboutСompany__bl_text}>
						<div className={st.aboutСompany__text}>
							<div className={st.aboutСompany__title}>
								<p className={st.text}>О компании</p>
								<h2 className={'text_h2 ' + st.text_h2} >лидер по производству оконных и дверных ПВХ-профилей</h2>
							</div>
							<div className={st.aboutСompany__left + ' ' + st.aboutСompany__left__mobile} >
								<div className={st.aboutСompany__bl_img}>
									<img src={aboutСompanyImg} ></img>
								</div>
							</div>
							<p className={'text ' + st.subtitle} >Основная цель нашей компании является производство качественной продукции с гарантией. Для достижения
								этой цели мы сотрудничаем с передовыми европейскими
								и турецкими компаниями как «Krauss Mafei», Renolit, «Mikrosan», «Akdeniz» и у нас трудятся высококвалифицированные кадры.
							</p>
							{/* <button className={'button ' + st.button} >Узнать больше</button> */}
							<div>
								<NavLink to='/aboutCompany'>
									<Button children='Ухнать больше' />
								</NavLink>
							</div>
						</div>
					</div>
					<div className={st.aboutСompany__left} >
						<div className={st.aboutСompany__bl_img}>
							<img src={aboutСompanyImg} ></img>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default AboutСompany