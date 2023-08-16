import clsx from 'clsx'
import Button from '../ui/Button'
import { Subtitle } from '../ui/Subtitle'
import { Text } from '../ui/Text'
import { TitleSection } from '../ui/TitleSection'
import st from './block_text_img.module.scss'
import { Link } from 'react-router-dom'

interface Props {
	props: dateProps
	imgSideLeft?: boolean
}
interface dateProps {
	image?: string
	title: string
	text: string
	buttonChildren?: string
	link: string
}
const BlockTextImg = ({ props, imgSideLeft }: Props) => {
	return (<>
		<section className={st.info} >
			<div className={'_container ' + st.container}>
				<div className={clsx(
					st.info__wrapper,
					imgSideLeft ? st.info__image_left : '',
				)}>
					<div className={clsx(
						st.info__image,
					)} >
						<div className={st.info__bl_img}>
							<img width={368} height={250} src={props.image} />
						</div>
					</div>
					<div className={st.info__bl_text}>
						<div className={st.info__text}>
							<div className={st.info__title}>
								<TitleSection children={props.title} />
								<Text children={props.text} />
							</div>
							<div className={st.block__button}>
								<Link to='/simple_window'>
									<Button link={props.link} children={props.buttonChildren} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>)
}
export default BlockTextImg