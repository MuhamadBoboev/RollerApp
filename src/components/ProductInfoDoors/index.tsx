import clsx from 'clsx'
import Button from '../ui/Button'
import { Subtitle } from '../ui/Subtitle'
import { Text } from '../ui/Text'
import { TitleSection } from '../ui/TitleSection'
import st from './product_info_doors.module.scss'
import { Link } from 'react-router-dom'

interface Props {
	props: dateProps
	imgSideLeft?: boolean
	buttonShow?: boolean
}
interface dateProps {
	image?: string
	title: string
	text: string
	buttonChildren?: string
	link: string
}
const ProductInfoDoors = ({ props, imgSideLeft, buttonShow = true }: Props) => {
	return (<>
		<section className={st.info} >
			<div className={st.container}>
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
							<div className={clsx(
								st.block__button,
								buttonShow ? '' : st.block__button__none
							)}>
								<Link to={props.link}>
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
export default ProductInfoDoors