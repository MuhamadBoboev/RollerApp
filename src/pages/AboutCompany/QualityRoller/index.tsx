import { Text } from '../../../components/ui/Text'
import { TitleSection } from '../../../components/ui/TitleSection'
import st from './quality_roller.module.scss'
import { motion } from 'framer-motion'

interface Props {
	title: string
	text: string
}
const QualityRoller = ({ title, text }: Props) => {
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
		<div className={'_container ' + st.container}>
			<div className={st.wrapper} >
				<motion.div
					initial="hidden"
					whileInView="animate"
					variants={imgVariants}
					className={st.body}>
					<TitleSection textAlign='center' children={title} />
					<Text textAlign='center' children={text} />
				</motion.div>
			</div>
		</div>
	)
}
export default QualityRoller