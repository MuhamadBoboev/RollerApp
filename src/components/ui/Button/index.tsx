import clsx from 'clsx';
import st from './button.module.scss'
import { ButtonProps } from './ButtonProps';

const Button = ({ className, link, children, component: Tag = 'button', variant = 'red', fullWidth, ...props }: ButtonProps) => {
	return (<Tag className={clsx(
		st.button,
		className,
		st[`variant-${variant}`])}
		{...props}>
		{children}
	</Tag>)
}
export default Button