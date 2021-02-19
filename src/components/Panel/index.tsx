import React from 'react'
import PanelItem from './PanelItem'
import { TimeData, TimeOfDay } from '@/utils/api'

interface PanelProps extends React.HTMLProps<HTMLDivElement> {
  time: TimeData
  timeOfDay: TimeOfDay
}

function Panel({ time, timeOfDay, className = '', ...props }: PanelProps) {
  return (
    <section
      className={`grid place-items-center h-panel-mobile md:h-panel-tablet xl:h-panel-desktop px-6 md:px-16 ${
        timeOfDay === 'morning' || timeOfDay === 'afternoon' ? 'bg-white text-gray-dark' : 'bg-black'
      } bg-opacity-75 blur ${className}`}
      {...props}
    >
      <div className="max-w-container w-full md:grid md:grid-cols-panel md:gap-x-10">
        <div>
          <PanelItem name="Current timezone">{time.timezone}</PanelItem>
          <PanelItem name="Day of the year">{time.day_of_year}</PanelItem>
        </div>
        <div
          className={`xl:pl-24 xl:border-l ${
            timeOfDay === 'morning' || timeOfDay === 'afternoon' ? 'xl:border-gray-dark' : 'xl:border-white'
          } xl:border-opacity-25`}
        >
          <PanelItem name="Day of the week">{time.day_of_week}</PanelItem>
          <PanelItem name="Week number">{time.week_number}</PanelItem>
        </div>
      </div>
    </section>
  )
}

export default Panel
