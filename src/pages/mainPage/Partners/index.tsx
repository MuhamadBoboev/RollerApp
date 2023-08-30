import st from './partners.module.scss'
import { motion } from 'framer-motion'

import PartnerItem from './PartnerItem'
interface PartnersInterface {
	image: string
	date: PartnerInterface[]
}
interface PartnerInterface {
	image: string
	title: string
	text: string
}

const PartnersDate: PartnersInterface[] = [
	{
		image: '/assets/image/partnerLogo_1.svg',
		date: [
			{
				image: '/assets/image/certificate_1.webp',
				title: 'Сертификат',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_2.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_3.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_4.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_5.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}
		]
	}, {
		image: '/assets/image/partnerLogo_2.svg',
		date: [
			{
				image: '/assets/image/certificate_1.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_2.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_3.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_4.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_5.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}
		]
	}, {
		image: '/assets/image/partnerLogo_3.svg',
		date: [
			{
				image: '/assets/image/certificate_1.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_2.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_3.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_4.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_5.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}
		]
	}, {
		image: '/assets/image/partnerLogo_4.svg',
		date: [
			{
				image: '/assets/image/certificate_1.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_2.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_3.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_4.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_5.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}
		]
	}, {
		image: '/assets/image/partnerLogo_5.svg',
		date: [
			{
				image: '/assets/image/certificate_1.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_2.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_3.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_4.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: 'assets/image/certificate_5.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}
		]
	},
]



const Partners = () => {
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

	return (
		<section className={'padding_top_150 ' + st.partners}>
			<div className={'_container ' + st.container} >
				<div className={st.partners__title_body} >
					<h2 className={'text_h2 ' + st.partners__title} >наши партнёры</h2>
					<div className={st.partners__text_block} >
						<p className={st.partners__text} >
							Мы предоставляем высокое качество работ и точные
							сроки исполнения заказа. Используем в производстве
							проверенные немецкие технологии и оборудование.
							Высококачественное сырье завозим из Германии, Турции,
							России, Казахстан и Китая
						</p>
					</div>
				</div>
				<ul className={st.partners__items} >
					{PartnersDate.map((el, index) =>
						<motion.li
							initial="hidden"
							viewport={{
								once: true
							}}
							whileInView="animate"
							custom={index}
							variants={imgVariants}
							className={st.partner__item}

						>
							<PartnerItem partnerItem={el} />
						</motion.li>
					)}
				</ul>
			</div>
		</section>)
}

export default Partners