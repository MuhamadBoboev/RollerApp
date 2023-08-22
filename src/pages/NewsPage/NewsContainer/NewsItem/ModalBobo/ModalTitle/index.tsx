import classes from './modal-title.module.scss'
import { HTMLAttributes } from 'react'
import clsx from 'clsx'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  className?: string
}

function ModalTitle({className, children, ...props}: Props) {
  return (
    <h2 className={clsx(classes.title, className)} {...props}>{children}</h2>
  )
}

export { ModalTitle }