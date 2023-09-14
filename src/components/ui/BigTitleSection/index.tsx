import clsx from 'clsx';
import st from './BigTitleSection.module.scss'
import { AllHTMLAttributes } from "react";
interface PropsBigTitleSection extends AllHTMLAttributes<HTMLElement> {
	tag?: 'h2' | 'h3'
	classlName?: string
}
export const BigTitleSection = ({ tag: Tag = 'h2', classlName, children, ...props }: PropsBigTitleSection) => {
	return (
		<Tag className={clsx(
			st.Text,
			classlName,
			{ ...props }
		)}>
			{children}
		</Tag>)
}