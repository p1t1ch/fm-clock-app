import React from 'react'
import { ReactComponent as ArrowUp } from '@/icons/arrow-up.svg'

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'type'> {
  showPanel: boolean
  setShowPanel: React.Dispatch<React.SetStateAction<boolean>>
}

function Button({ showPanel, setShowPanel, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`group flex items-center justify-end button w-29 h-10 md:w-36 md:h-14 pr-1 md:pr-2 bg-white text-gray-dark text-opacity-50 rounded-full ${className}`}
      onClick={() => setShowPanel(!showPanel)}
      {...props}
    >
      <span className="mr-4 md:mr-2">{showPanel ? 'Less' : 'More'}</span>
      <ArrowUp
        className={`w-8 h-8 md:w-10 md:h-10 text-gray-dark group-hover:text-gray-light group-focus:text-gray-light transform ${
          !showPanel ? 'rotate-180' : ''
        } transition-all`}
      />
    </button>
  )
}

export default Button
