import st from './AboutСompany.module.scss'
import aboutСompanyImg from './AboutСompany.jpg'
import clsx from 'clsx'
import { IBlockInfo } from '../../models/IBlockInfo'
import { Subtitle } from '../ui/Subtitle'
import { TitleSection } from '../ui/TitleSection'

interface Props {
	props: IBlockInfo
	variant: 'first' | 'second'
}

const BlockInfo = ({ props, variant }: Props) => {
	return (
		<section className={st.block_info} >
			<div className={'_container ' + st.container}>
				<div className={clsx(
					st.block_info__wrapper,
					st[`variant_${variant}`])}>
					<div className={st.block_info__bl_text}>
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
					</div>
					<div className={st.block_info__left} >
						<div className={st.block_info__bl_img}>
							<img src={`${props.image}`} width={368} height={436}></img>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default BlockInfo