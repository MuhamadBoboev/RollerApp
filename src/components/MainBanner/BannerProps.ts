import { PropsWithChildren } from 'react';
export interface BannerProps extends PropsWithChildren {
	title?: string
	text?: string
	children?: React.ReactNode
}