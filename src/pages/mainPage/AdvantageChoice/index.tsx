import Wrapper from '../../../components/Wrapper'
import Advantage from './Advantage'
import Choice from './Choice'
import st from './advantage_choice.module.scss'

const AdvantageChoice = () => {
	return (<Wrapper className={st.advantageChoice}>
		<div className={'_container ' + st.contianer}>
			<Advantage />
			{/* <Choice /> */}
		</div>
	</Wrapper>)
}
export default AdvantageChoice