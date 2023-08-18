import { SubtitleProps } from "./SubtitleProps"
import clsx from 'clsx';
import st from './subtitle.module.scss'

export const SubtitleBlock = ({ clName, textAlign = 'start', children }: SubtitleProps) => {
	return (
		<div className={clsx(
			st.subtitle,
			clName,
			st[`text_align__${textAlign}`],
		)}>
			<p>{children}</p>
		</div>)
}