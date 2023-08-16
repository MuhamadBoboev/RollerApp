import clsx from 'clsx'
import { ITimeline } from '../../models/ITimeline'
import { Subtitle } from '../ui/Subtitle'
import { Text } from '../ui/Text'
import { TitleSection } from '../ui/TitleSection'
import st from './timeline.module.scss'
import './img/briefcase_1.svg'

interface Props {
	items: ITimeline[]
	subtitleMain: string
	titleMain: string
	imgDisplay?: boolean
}

const Timeline = ({ items, subtitleMain, titleMain, imgDisplay = false }: Props) => {
	return (<>
		<div className={'_container ' + st.timeline} >
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
				{items.map((el) =>
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
						<div className={clsx(st.content__bl_img, st[`content__${imgDisplay}`])}>
							<img
								className={st.content_img}
								src={`${el.image}`}
								width={170}
								height={170} ></img>
						</div>
					</li>
				)}
			</ul>
		</div>
	</>)
}
export default Timeline