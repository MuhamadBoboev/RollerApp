import { SubtitleProps } from "./TitleSectionProps"
import clsx from 'clsx';
import st from './title_section.module.scss'

export const TitleSection = ({ clName, textAlign = 'start', titleRed, children }: SubtitleProps) => {
	return (
		<h2 className={clsx(
			st.subtitle,
			clName,
			st[`text_align__${textAlign}`],
		)}>
			<p>{children}&nbsp;<span className={clsx(
				st.red_text,
				titleRed ? '' : st['display']
			)} >{titleRed}</span></p>
		</h2>)
}