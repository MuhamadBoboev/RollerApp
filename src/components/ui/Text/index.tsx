import { TextProps } from "./TextProps"
import clsx from 'clsx';
import st from './text.module.scss'

export const Text = ({ clName, textAlign = 'start', children }: TextProps) => {
	return (
		<p className={clsx(
			st.text,
			st[`text_align__${textAlign}`],
			clName,
		)}>
			<p>{children}</p>
		</p>)
}