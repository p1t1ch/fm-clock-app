import React from 'react'
import { ReactComponent as Sun } from '@/icons/sun.svg'
import { ReactComponent as Moon } from '@/icons/moon.svg'
import { TimeData, GeolocationData, TimeOfDay } from '@/pages/index'

interface TimeProps extends React.HTMLProps<HTMLDivElement> {
  time?: TimeData
  geolocation?: GeolocationData
  timeOfDay: TimeOfDay
}

function Time({ time, geolocation, timeOfDay, className = '', ...props }: TimeProps) {
  if (!time || !geolocation) return null

  const date = new Date(time.datetime)
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return (
    <div className={`${className}`} {...props}>
      <div className="h4 flex items-center">
        {timeOfDay === 'morning' || timeOfDay === 'afternoon' ? <Sun className="icon" /> : <Moon className="icon" />}
        <span>Good {timeOfDay}</span>
        <span className="hidden md:block">, it’s currently</span>
      </div>
      <div>
        <time dateTime={time.datetime} className="h1">
          {hours}:{minutes}
        </time>
        <small className="suffix">BTS</small>
      </div>
      <div className="h3">
        In {geolocation.city}, {geolocation.country_name}
      </div>
    </div>
  )
}

export default Time
