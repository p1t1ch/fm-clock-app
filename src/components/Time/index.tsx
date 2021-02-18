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
      <div className="h4 flex items-center mb-4">
        {timeOfDay === 'morning' || timeOfDay === 'afternoon' ? <Sun className="icon" /> : <Moon className="icon" />}
        <span>Good {timeOfDay}</span>
        <span className="hidden md:block">, it’s currently</span>
      </div>
      <div className="mb-4">
        <time dateTime={time.datetime} className="h1">
          <span>{`0${hours}`.slice(-2)}</span>
          <span className="motion-safe:animate-time">:</span>
          <span>{`0${minutes}`.slice(-2)}</span>
        </time>
        <small className="suffix ml-1 md:ml-3">BTS</small>
      </div>
      <div className="h3">
        In {geolocation.city}, {geolocation.country_name}
      </div>
    </div>
  )
}

export default Time
