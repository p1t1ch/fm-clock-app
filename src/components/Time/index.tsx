import React from 'react'
import { ReactComponent as Sun } from '@/icons/sun.svg'
// import { ReactComponent as Moon } from '@/icons/moon.svg'
import { TimeData, GeolocationData } from '@/pages/index'

interface TimeProps extends React.HTMLProps<HTMLDivElement> {
  time?: TimeData
  geolocation?: GeolocationData
}

// - Change the greeting depending on the time of day. It should say:
//   - "Good morning" between 5am and 12pm
//   - "Good afternoon" between 12pm and 6pm
//   - "Good evening" between 6pm and 5am
// - Change the greeting icon and background image depending on the time of day. They should show:
//   - The sun icon and the daytime background image between 5am and 6pm
//   - The moon icon and the nighttime background image between 6pm and 5am

function Time({ time, geolocation, className = '', ...props }: TimeProps) {
  const date = time && new Date(time.datetime)

  return (
    <div className={`${className}`} {...props}>
      <div className="h4">
        <Sun /> Good morning, it’s currently
      </div>
      <div>
        <time dateTime={time?.datetime}>
          {date ? date.getHours() : '00'}:{date ? date.getMinutes() : '00'}
        </time>
        <small>BTS</small>
      </div>
      <div className="h3">{geolocation ? `In ${geolocation.city}, ${geolocation.country_name}` : '&nbsp;'}</div>
    </div>
  )
}

export default Time
