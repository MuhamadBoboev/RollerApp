import Advantage from './Advantage'
import Choice from './Choice'
import st from './advantage_choice.module.scss'

const AdvantageChoice = () => {
	return (<section className={'padding_top_150 ' + st.advantageChoice}>
		<div className={'_container ' + st.contianer}>
			<Advantage/>
			<Choice/>
		</div>
	</section>)
}
export default AdvantageChoice