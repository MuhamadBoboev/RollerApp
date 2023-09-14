import { AllHTMLAttributes } from 'react'
import st from './Container.module.scss'
import clsx from 'clsx'
interface ContainerProps extends AllHTMLAttributes<HTMLElement> {
	className?: string
	id?: string
}

const Container = ({ className, id, children, ...props }: ContainerProps) => {
	return (<div
		id={id}
		className={clsx(st.Container, className)}
		{...props}>
		{children}
	</div>)
}

export default Container