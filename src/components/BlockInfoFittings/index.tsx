import st from './BlockInfoFittings.module.scss'
import clsx from 'clsx'
import { TitleSection } from '../ui/TitleSection'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { motion } from 'framer-motion'

interface Props {
	props: DateProps
	buttonShow?: boolean
}
interface DateProps {
	image: string
	title: string
	text: string
	linkButton?: string
}

const BlockInfoFittings = ({ props, buttonShow }: Props) => {
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
	return (
		<section className={st.block_info} >
			<div className={st.container}>
				<div className={clsx(
					st.block_info__wrapper,
					st[`variant_${buttonShow}`])}>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.block_info__bl_text}>
						<div className={st.block_info__body}>
							<div className={st.block_info__title}>
								<TitleSection children={props.title} />
							</div>
							<div className={st.text__block}>
								<p className={'text ' + st.text}> {props.text} </p>
							</div>
							<Link className={st.button_block} to={`${props.linkButton}`}>
								<Button children='Бесплатный замер' /></Link>
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.block_info__left} >
						<div className={st.block_info__title__mobile}>
							<TitleSection children={props.title} />
						</div>
						<div className={st.block_info__bl_img}>
							<img src={`${props.image}`} width={368} height={436}></img>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
export default BlockInfoFittings