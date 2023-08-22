import { Link } from 'react-router-dom'
import Button from '../../../components/ui/Button'
import st from './BlockInfo.module.scss'
import { Text } from '../../../components/ui/Text'

const BlockInfo = () => {
	return (<div className={st.container}>
		<div className={st.wrapper} >
			<div className={st.body} >
				<div className={st.block_title} >
					<p className={st.title} >Вы привыкли рационально использовать каждый квадратный метр?</p>
					<Text textAlign='center' children='И при этом Вы хотите, чтобы Ваш балкон всегда был как новый? ROLLER раз и навсегда изменит Ваше представление о том, каким должен быть современный балкон. Стильно, красиво, функционально, удобно и надёжно.' />
				</div>
				<div className={st.block__button}>
					<Link to='contacts'>
						<Button children='Заказать замер' />
					</Link>
				</div>
			</div>
		</div>
	</div>)
}
export default BlockInfo