import clsx from 'clsx';
import st from './subtitle.module.scss'
import { SubtitleSmallRedProps } from './SubtitleSmallRedProps';

export const SubtitleSmallRed = ({ clName, textAlign = 'start', children }: SubtitleSmallRedProps) => {
	return (
		<h3 className={clsx(
			st.subtitle,
			clName,
			st[`text_align__${textAlign}`],
		)}>
			<p>{children}</p>
		</h3>)
}