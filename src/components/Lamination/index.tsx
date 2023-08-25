import { SubtitleSmallRed } from '../ui/SubtitleSmallRed'
import { Text } from '../ui/Text'
import { TitleSection } from '../ui/TitleSection'
import st from './lamination.module.scss'
import img from './lamination.png'
import { motion } from 'framer-motion'


const Lamination = () => {
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
		<div className={st.container}>
			<div className={st.wrapper} >
				<motion.div
					initial="hidden"
					whileInView="animate"
					variants={imgVariants}
					className={st.title_body} >
					<div className={st.title_block} >
						<SubtitleSmallRed textAlign='center' children='Варианты ламинации' />
						<TitleSection textAlign='center' children='Мы предлагаем различные варианты цветной ламинации профилей ПВХ' />
					</div>
					<div className={st.text_block}>
						<Text textAlign='center' children='Условно их можно разделить на стандартные (популярные) и редко используемые.
						Стандартные цвета стоят значительно дешевле не стандартных.Стандартные цвета есть в наличии и могут быть изготовленны в сроки обычных белых окон. Всегда в наличии ламинация «под дерево» (ЗОЛОТОЙ ДУБ, ОРЕГОН, ТЕМНЫЙ ДУБ, БОЛОТНЫЙ ДУБ, ПОЛОСАТЫЙ ДУГЛАС, ГОРНАЯ СОСНА, МАХАГОН, СВЕТЛЫЙ ДУБ, ОРЕХ) Редко используемые цвета — ЭТО полностью заказные позиции (большой срок изготовления), профили ламинируются под заказ.' />
					</div>
				</motion.div>
				<div className={st.bl_img} >
					<img src={img} width={864} height={933} ></img>
				</div>
			</div>
		</div>
	</>)
}
export default Lamination