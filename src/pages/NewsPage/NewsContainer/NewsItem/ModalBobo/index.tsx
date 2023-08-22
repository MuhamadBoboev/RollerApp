import classes from './modal.module.scss'
import { createPortal } from 'react-dom'
import { useEventListener, useIsMounted, useLockedBody, useWindowSize } from 'usehooks-ts'
import { ReactNode, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HandySvg from '../modal/close_svg.svg'
import clsx from 'clsx'

interface Props {
	isOpen: boolean
	children: ReactNode
	className?: string
	classNames?: {
		backdrop?: string
		content?: string
		main?: string
		close?: string
	}

	onClose(): void
	onUnmount?(): void
}

function Modal({ children, isOpen, onClose, className, classNames, onUnmount }: Props) {
	const isMounted = useIsMounted()
	const modalRef = useRef(null)
	useLockedBody(isOpen)
	const { width } = useWindowSize()

	useEventListener('keydown', (event) => {
		if (event.code === 'Escape') {
			onClose()
		}
	}, modalRef)

	const modalRoot = isMounted() ? window.document.getElementById('modal') : null
	const isMobile = width < 480

	return isMounted() ? createPortal((
		<AnimatePresence
			onExitComplete={() => {
				onUnmount && onUnmount()
			}}
		>
			{isOpen && <div className={clsx(classes.modal, className)} ref={modalRef}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{
						opacity: 0,
						transition: {
							delay: .3
						}
					}}
					className={clsx(classes.backdrop, classNames?.backdrop)}
					onClick={onClose}
				/>
				<div
					className={clsx(classes.content, classNames?.content)}
					onClick={() => {
						if (window.innerWidth < 480) {
							onClose()
						}
					}}
				>
					<motion.div
						initial={{
							opacity: 0,
							scale: isMobile ? 1 : .9,
							y: isMobile ? 40 : 10
						}}
						animate={{
							opacity: 1,
							scale: 1,
							y: 0,
							transition: {
								delay: isMobile ? 0 : .18,
								duration: isMobile ? .16 : .2,
								type: isMobile ? undefined : 'tween'
							}
						}}
						exit={{
							opacity: 0,
							scale: isMobile ? 1 : .9,
							transition: {
								duration: isMobile ? .16 : .2,
							},
							y: isMobile ? 40 : 10
						}}
						className={clsx(classes.main, classNames?.main)}
						onClick={(event) => event.stopPropagation()}
					>
						<button
							className={clsx(classes.close, classNames?.close)}
							aria-label="close"
							onClick={onClose}
						>
							<HandySvg
								src="/assets/icons/close-small.svg"
								width={9}
								height={9}
							/>
						</button>
						{children}
					</motion.div>
				</div>
			</div>}
		</AnimatePresence>
	), modalRoot!) : null
}

export { Modal }