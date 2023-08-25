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
		<section className={st.our_services} >
			<div className={'_container ' + st.container}>
				<div className={st.our_services__title}>
					<div className={st.our_services__top}>
						<Subtitle textAlign='center' children='Наши услуги' />
						<TitleSection textAlign='center' children='ЛОГИСТИКА И ЭКСПОРТ' />
					</div>
					<div className={st.top_text}>
						<Text textAlign='center' children='Компания ROLLER имеет свой собственный отдел логистики для управления информационными, товарными, финансовыми и транспортными потоками.' />
					</div>
				</div>
				<div className={st.our_services__wrapper}>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.our_services__left}
					>
						<div className={st.our_services__bl_img}>
							<img width={408} height={276} src={'/assets/image/ourService.webp'} ></img>
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.our_services__bl_text}>
						<div className={st.our_services__text}>
							<h3 className={'text_h3 ' + st.title__item} >ОБ УСЛУГЕ</h3>
							<Text children='Отлаженная система логистики и экспорта, обеспечивает соблюдение установленных в договоре сроков поставки. На территории предприятия создан большой автомобильный парк предоставляющий клиентам услуги по доставке груза. Квалифицированный персонал работает индивидуально с каждым заказчиком — выбирает оптимально подходящий для конкретного заказа транспорт и оказывает необходимую помощь в организации отгрузки продукции.' />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default OurServices;