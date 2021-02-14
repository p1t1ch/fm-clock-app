import React from 'react'

interface PanelProps extends React.HTMLProps<HTMLDivElement> {
  timezone: string
  weekDay: number
  weekNumber: number
  yearDay: number
}

function Panel({ timezone, weekDay, weekNumber, yearDay, className = '', ...props }: PanelProps) {
  return (
    <section className={`${className}`} {...props}>
      <div className="h6">Current timezone</div>
      <div className="h2">{timezone}</div>
      <div className="h6">Day of the year</div>
      <div className="h2">{yearDay}</div>
      <div className="h6">Day of the week</div>
      <div className="h2">{weekDay}</div>
      <div className="h6">Week number</div>
      <div className="h2">{weekNumber}</div>
    </section>
  )
}

export default Panel
