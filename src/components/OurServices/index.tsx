import Container from '../Container';
import Wrapper from '../Wrapper';
import { BigTitleSection } from '../ui/BigTitleSection';
import { Subtitle } from '../ui/Subtitle';
import { Text } from '../ui/Text';
import { TitleSection } from '../ui/TitleSection';
import st from './OurServices.module.scss'
import { motion } from 'framer-motion'


const OurServices = () => {
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
		<Wrapper className={st.our_services} >
			<Container className={st.container}>
				{/* <div className={st.our_services__title}>
					<div className={st.our_services__top}>
						<Subtitle textAlign='center' children='Наши услуги' />
						<TitleSection textAlign='center' children='ЛОГИСТИКА И ЭКСПОРТ' />
						<BigTitleSection>доставка</BigTitleSection>
					</div>
					<div className={st.top_text}>
						<Text textAlign='center' children='Компания ROLLER имеет свой собственный отдел логистики для управления информационными, товарными, финансовыми и транспортными потоками.' />
					</div>
				</div> */}
				<BigTitleSection>доставка</BigTitleSection>
				<div className={st.our_services__wrapper}>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.our_services__left}
					>
						<div className={st.our_services__bl_img}>
							<img width={557} height={404} src={'/assets/image/ourService.webp'} alt='доставка' ></img>
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.our_services__bl_text}>
						<div className={st.right_wrapper} >
							<div className={st.our_services__text}>
								<h3 className={'text_h3 ' + st.title__item} >ОБ УСЛУГЕ</h3>
								<Text children='Отлаженная система логистики и экспорта, обеспечивает соблюдение установленных в договоре сроков поставки. На территории предприятия создан большой автомобильный парк предоставляющий клиентам услуги по доставке груза. Квалифицированный персонал работает индивидуально с каждым заказчиком — выбирает оптимально подходящий для конкретного заказа транспорт и оказывает необходимую помощь в организации отгрузки продукции.' />
							</div>
							<ul className={st.items} >
								<li className={st.item} >
									<div className={st.item__body}>
										<p className={st.title} >Доставка</p>
										<div className={st.item__footer}>
											<Text children={'По всему Таджикистану'} />
											<div className={st.item__img_bl} >
												<img src={'/assets/image/iblock_1.svg'} width={62} height={59} />
											</div>
										</div>
									</div>
								</li>
								<li className={st.item} >
									<div className={st.item__body}>
										<p className={st.title} >Гарантия</p>
										<div className={st.item__footer}>
											<Text children={'Бесперебойные поставки'} />
											<div className={st.item__img_bl} >
												<img src={'/assets/image/iblock_2.svg'} width={62} height={59} />
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>

					</motion.div>
				</div>
				<p className={st.footer_text}>
					Для получения дополнительной информации Вы можете связаться с отделом экспорта по электронной почте:&nbsp;
					<a href='href="mailto:Office@roller.tj"' className={st.text_footer__red}>Office@roller.tj</a>
				</p>
			</Container>
		</Wrapper>
	)
}

export default OurServices;