import { Link } from 'react-router-dom'
import st from './choice.module.scss'
import { motion } from 'framer-motion'

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
const Choice = () => {
	return (<div className={st.choice} >
		<div className={' ' + st.container} >
			<div className={st.choice__wrapper}>
				<motion.div className={st.choice__body}
					initial="hidden"
					whileInView="animate"
					variants={imgVariants}
				>

					<h3 className={st.choice__title}>
						ЗАТРУДНЯЕТЕСЬ С ВЫБОРОМ?
					</h3>
					<div className={st.choice__text_block} >
						<p className={' text ' + st.choice__text} >
							Если у вас возникли какие либо трудности при
							подборе то вы можете заказать замер у нас
							совершенно бесплатно
						</p>
					</div>
					<div className={st.choice__bl_button} >
						<Link to='./contacts' className={'button ' + st.choice__button} >
							Заказать замер
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	</div>)
}
export default Choice