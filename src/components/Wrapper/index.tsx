import { AllHTMLAttributes } from 'react'
import st from './Wrapper.module.scss'
import clsx from 'clsx'
interface WrapperProps extends AllHTMLAttributes<HTMLElement> {
	tag?: 'div' | 'section'
	className?: string
	id?: string
}

const Wrapper = ({ tag: Tag = 'div', id, className, children, ...props }: WrapperProps) => {
	return (<Tag
		id={id}
		className={clsx(st.Wrapper, className)}
		{...props}>
		{children}
	</Tag>)
}

export default Wrapper