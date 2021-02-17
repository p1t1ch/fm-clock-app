import React from 'react'
import { ReactComponent as ArrowUp } from '@/icons/arrow-up.svg'

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'type'> {
  showPanel: boolean
  setShowPanel: React.Dispatch<React.SetStateAction<boolean>>
}

function Button({ showPanel, setShowPanel, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-end button w-36 h-14 pr-2 bg-white text-gray-dark text-opacity-50 rounded-full ${className}`}
      onClick={() => setShowPanel(!showPanel)}
      {...props}
    >
      <span className="mr-2">{showPanel ? 'Less' : 'More'}</span>
      <ArrowUp className={`w-10 h-10 transform ${!showPanel ? 'rotate-180' : ''} transition-transform`} />
    </button>
  )
}

export default Button
