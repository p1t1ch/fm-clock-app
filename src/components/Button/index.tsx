import React from 'react'
import { ReactComponent as ArrowUp } from '@/icons/arrow-up.svg'

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'type'> {
  isActive: boolean
}

function Button({ isActive, className = '', ...props }: ButtonProps) {
  return (
    <button className={`button ${className}`} {...props}>
      {isActive ? 'Less' : 'More'} <ArrowUp />
    </button>
  )
}

export default Button
