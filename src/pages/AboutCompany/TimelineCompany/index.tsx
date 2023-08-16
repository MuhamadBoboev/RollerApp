import { Subtitle } from '../../../components/ui/Subtitle'
import { Text } from '../../../components/ui/Text'
import { TitleSection } from '../../../components/ui/TitleSection'
import { ITimeline } from '../../../models/ITimeline'
import st from './timeline.module.scss'

interface Props {
	items: ITimeline[]
	subtitleMain: string
	titleMain: string
}

const TimelineCompany = ({items, subtitleMain, titleMain }:Props ) => {
	return(<>
		<div className={st.timeline} >
			<div className={st.bl__title} >
				<Subtitle
					textAlign='center' 
					children={subtitleMain}
					/>
				<TitleSection 
					textAlign='center' 
					children={titleMain}
					/>
			</div>
			<ul className={st.items}>
				{items.map((el)=>
					<li className={st.item} key={el.key}>
						<div className={st.body} >
							<div className={st.text_body}>
								<div className={st.title__block} >
									<p className={st.title}>{el.title}<br></br>
										<span className={st.subtitle}>
											{el.subtitle}
										</span>
									</p>
								</div>
								<Text children={el.text} />
							</div>
						</div>
						<div className={st.content_number} >
								<p>{el.key}</p>
						</div>
					</li>
				)}
			</ul>
		</div>
	</>)
}
export default TimelineCompany