import clsx from 'clsx'
import Button from '../ui/Button'
import { Subtitle } from '../ui/Subtitle'
import { Text } from '../ui/Text'
import { TitleSection } from '../ui/TitleSection'
import st from './product_info_doors.module.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


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
	return (<>
		<section className={st.info} >
			<div className={st.container}>
				<div className={clsx(
					st.info__wrapper,
					imgSideLeft ? st.info__image_left : '',
				)}>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={clsx(
							st.info__image,
						)} >
						<div className={st.info__bl_img}>
							<img width={368} height={250} src={props.image} />
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.info__bl_text}>
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
					</motion.div>
				</div>
			</div>
		</section>
	</>)
}
export default ProductInfoDoors