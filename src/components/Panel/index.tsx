import React from 'react'
import { TimeData, TimeOfDay } from '@/pages/index'

interface PanelProps extends React.HTMLProps<HTMLDivElement> {
  time?: TimeData
  timeOfDay: TimeOfDay
}

function Panel({ time, timeOfDay, className = '', ...props }: PanelProps) {
  return (
    <section
      className={`grid place-items-center px-6 py-12 md:px-16 md:py-30 xl:py-19 ${
        timeOfDay === 'morning' || timeOfDay === 'afternoon' ? 'bg-white text-gray-dark' : 'bg-black'
      } bg-opacity-75 blur ${className}`}
      {...props}
    >
      <div className="max-w-container w-full">
        <div className="h6">Current timezone</div>
        <div className="h2">{time ? time.timezone : '–'}</div>
        <div className="h6">Day of the year</div>
        <div className="h2">{time ? time.day_of_year : '–'}</div>
        <div className="h6">Day of the week</div>
        <div className="h2">{time ? time.day_of_week : '–'}</div>
        <div className="h6">Week number</div>
        <div className="h2">{time ? time.week_number : '–'}</div>
      </div>
    </section>
  )
}

export default Panel
