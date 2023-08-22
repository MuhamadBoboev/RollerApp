import classes from './modal-sub.module.scss'
import { HTMLAttributes } from 'react'
import clsx from 'clsx'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  className?: string
}

function ModalSubtitle({className, children, ...props}: Props) {
  return (
    <p className={clsx(classes.subtitle, className)} {...props}>{children}</p>
  )
}

export { ModalSubtitle }