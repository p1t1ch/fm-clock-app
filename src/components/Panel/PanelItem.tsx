import React from 'react'

interface PanelItemProps extends React.HTMLProps<HTMLDivElement> {
  name: string
  children?: React.ReactNode
}

function PanelItem({ name, children, className = '', ...props }: PanelItemProps) {
  return (
    <div
      className={`flex justify-between items-center md:block mb-4 md:mb-0 md:odd:mb-12 xl:odd:mb-10 ${className}`}
      {...props}
    >
      <div className="h6 md:mb-2">{name}</div>
      <div className="h2">{children ?? '–'}</div>
    </div>
  )
}

export default PanelItem
