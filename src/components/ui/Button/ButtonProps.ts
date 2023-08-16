import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
	component?: any
	variant?: 'red' | 'white'
	fullWidth?: boolean
	link?: string 

	[key: string]: any
}