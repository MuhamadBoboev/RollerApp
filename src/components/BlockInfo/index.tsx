import st from './AboutСompany.module.scss'
import aboutСompanyImg from './AboutСompany.jpg'
import clsx from 'clsx'
import { IBlockInfo } from '../../models/IBlockInfo'
import { Subtitle } from '../ui/Subtitle'
import { TitleSection } from '../ui/TitleSection'
import { motion } from 'framer-motion'

interface Props {
	props: IBlockInfo
	variant: 'first' | 'second'
}

const BlockInfo = ({ props, variant }: Props) => {
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
			<div className={'_container ' + st.container}>
				<div className={clsx(
					st.block_info__wrapper,
					st[`variant_${variant}`])}>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.block_info__bl_text}>
						<div className={st.block_info__body}>
							<div className={st.block_info__title}>
								<div className={clsx(
									props.subtitle ? '' : st[`display_none`]
								)}>
									<Subtitle children={props.subtitle} />
								</div>
								<TitleSection children={props.title} titleRed={props.titleRed} />
							</div>
							<div className={st.text__block}>
								<p className={'text ' + st.text}> {props.text} </p>
								<p className={clsx(
									st.last_text,
									props.lastText ? '' : st['display_none']
								)} >
									{props.lastText}
								</p>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.block_info__left} >
						<div className={st.block_info__bl_img}>
							<img src={`${props.image}`} width={368} height={436}></img>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
export default BlockInfo