import st from './AboutСompany.module.scss'
import Button from '../../../../components/ui/Button'
import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'
import { BigTitleSection } from '../../../../components/ui/BigTitleSection'
import Container from '../../../../components/Container'
import Wrapper from '../../../../components/Wrapper'

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

			<Container className={st.container}>
				<div className={st.aboutСompany__wrapper}>
					<div className={st.aboutСompany__bl_text}>
						<div className={st.aboutСompany__text}>
							<div className={st.aboutСompany__title}>
								{/* <p className={st.text}>О компании</p> */}
								<BigTitleSection>О&nbsp;компании</BigTitleSection>
								<h3 className={'text_h2 ' + st.text_h2} >Ведущий производитель оконных и дверных ПВХ-профилей в таджикистане</h3>
							</div>
							<div className={st.aboutСompany__left + ' ' + st.aboutСompany__left__mobile} >
								<div className={st.aboutСompany__bl_img}>
									<img src='/assets/image/main_img_2.webp' width={386} height={386} alt='logo_company' />
								</div>
							</div>
							<p className={'text ' + st.subtitle} >
								Основная цель нашей компании является производство качественной продукции с гарантией. Для достижения этой цели мы сотрудничаем с передовыми европейскими и турецкими компаниями как Renolit, «Mikrosan», «Akdeniz». А также, приглашаем к сотрудничеству новых партнёров.
								Системы профилей ROLLER — это надёжность, качество и доступность. Это тёплое решение для уюта в каждом доме. Это профиль, которому доверяют!
							</p>
						</div>
					</div>
					<div className={st.aboutСompany__left} >
						<div className={st.aboutСompany__bl_img}>
							<img src='/assets/image/main_img_2.webp' width={368} height={399} alt='image' />
						</div>
					</div>
				</div>
				<div>
					<div>
						<Link to='aboutCompany'>
							<Button children='Узнать больше' />
						</Link>
					</div>
				</div>
			</Container>
		</motion.section>
	)
}
export default AboutСompany