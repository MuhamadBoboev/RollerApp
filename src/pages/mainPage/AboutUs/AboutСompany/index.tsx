import st from './AboutСompany.module.scss'
import Button from '../../../../components/ui/Button'
import { motion } from 'framer-motion'

import { NavLink } from 'react-router-dom'

const AboutСompany = () => {
	return (
		<motion.section
			initial={{
				opacity: 0,
				y: 40,
			}}
			exit={{
				opacity: 0,
				y: 40,
			}}
			transition={{
				duration: .5
			}}
			viewport={{
				amount: 'some',
				margin: '0px 0px -140px 0px',
				once: false,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			className={st.aboutСompany}
		>
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
									<img src='/assets/image/main_img_2.webp' width={368} height={399} alt='image' />
								</div>
							</div>
							<p className={'text ' + st.subtitle} >Основная цель нашей компании является производство качественной продукции с гарантией. Для достижения
								этой цели мы сотрудничаем с передовыми европейскими
								и турецкими компаниями как «Krauss Mafei», Renolit, «Mikrosan», «Akdeniz» и у нас трудятся высококвалифицированные кадры.
							</p>
							<div>
								<div className='/aboutCompany'>
									<Button children='Узнать больше' />
								</div>
							</div>
						</div>
					</div>
					<div className={st.aboutСompany__left} >
						<div className={st.aboutСompany__bl_img}>
							<img src='/assets/image/main_img_2.webp' width={368} height={399} alt='image' />
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	)
}
export default AboutСompany