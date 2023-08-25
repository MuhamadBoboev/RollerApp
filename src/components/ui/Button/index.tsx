import clsx from 'clsx';
import st from './button.module.scss'
import { ButtonProps } from './ButtonProps';
// import { animated, useSpringRef, useSpring, useScroll } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';


const Button = ({ className, link, children, component: Tag = 'button', variant = 'red', fullWidth, ...props }: ButtonProps) => {
	const [state, toggle] = useState(true)

	return (

		<Tag className={clsx(
			st.button,
			className,
			st[`variant-${variant}`])}
			{...props}>
			{children}
		</Tag>
	)
}
export default Button