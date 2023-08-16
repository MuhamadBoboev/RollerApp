import { Link } from 'react-router-dom'
import st from './choice.module.scss'

const Choice = () => {
	return (<div className={st.choice} >
		<div className={' ' + st.container} >
			<div className={st.choice__wrapper}>
				<div className={st.choice__body}>
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
				</div>
			</div>
		</div>
	</div>)
}
export default Choice