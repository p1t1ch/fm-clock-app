import React from 'react'
import { TimeData } from '@/pages/index'

interface PanelProps extends React.HTMLProps<HTMLDivElement> {
  time?: TimeData
}

function Panel({ time, className = '', ...props }: PanelProps) {
  return (
    <section className={`${className}`} {...props}>
      <div className="h6">Current timezone</div>
      <div className="h2">{time ? time.timezone : '–'}</div>
      <div className="h6">Day of the year</div>
      <div className="h2">{time ? time.day_of_year : '–'}</div>
      <div className="h6">Day of the week</div>
      <div className="h2">{time ? time.day_of_week : '–'}</div>
      <div className="h6">Week number</div>
      <div className="h2">{time ? time.week_number : '–'}</div>
    </section>
  )
}

export default Panel
