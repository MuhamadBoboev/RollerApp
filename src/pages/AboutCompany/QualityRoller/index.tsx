import { Text } from '../../../components/ui/Text'
import { TitleSection } from '../../../components/ui/TitleSection'
import st from './quality_roller.module.scss'

interface Props {
	title: string
	text: string
}
const QualityRoller = ({ title, text }: Props) => {
	return (
		<div className={'_container ' + st.container}>
			<div className={st.wrapper} >
				<div className={st.body}>
					<TitleSection textAlign='center' children={title} />
					<Text textAlign='center' children={text} />
				</div>
			</div>
		</div>
	)
}
export default QualityRoller