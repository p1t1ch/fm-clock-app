import React from 'react'
import { ReactComponent as Sun } from '@/icons/sun.svg'
import { ReactComponent as Moon } from '@/icons/moon.svg'
import { TimeData, GeolocationData } from '@/pages/index'

interface TimeProps extends React.HTMLProps<HTMLDivElement> {
  time?: TimeData
  geolocation?: GeolocationData
}

function Time({ time, geolocation, className = '', ...props }: TimeProps) {
  if (!time || !geolocation) return null

  const date = new Date(time.datetime)
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return (
    <div className={`${className}`} {...props}>
      <div className="h4">
        {hours >= 5 && hours < 18 ? <Sun /> : <Moon />} Good{' '}
        {hours >= 5 && hours < 12 ? 'morning' : hours >= 12 && hours < 18 ? 'afternoon' : 'evening'}, it’s currently
      </div>
      <div>
        <time dateTime={time.datetime}>
          {hours}:{minutes}
        </time>
        <small>BTS</small>
      </div>
      <div className="h3">
        In {geolocation.city}, {geolocation.country_name}
      </div>
    </div>
  )
}

export default Time
