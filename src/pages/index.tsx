import React, { useEffect, useState } from 'react'
import Seo from '@/components/Seo'
import Comment from '@/components/Comment'
import Time from '@/components/Time'
import Panel from '@/components/Panel'
import Button from '@/components/Button'
import { fetchTime, fetchGeolocation, fetchComment } from '@/utils/api'

export interface TimeData {
  datetime: string
  timezone: string
  day_of_week: number
  day_of_year: number
  week_number: number
}

export interface GeolocationData {
  country_name: string
  city: string
}

export interface CommentData {
  text: string
  author: string
}

export type TimeOfDay = 'morning' | 'afternoon' | 'evening' | undefined

function IndexPage() {
  const [time, setTime] = useState<TimeData>()
  const [geolocation, setGeolocation] = useState<GeolocationData>()
  const [comment, setComment] = useState<CommentData>()
  const [showPanel, setShowPanel] = useState(false)

  let timeOfDay: TimeOfDay
  if (time) {
    const hours = time && new Date(time.datetime).getHours()
    timeOfDay = hours >= 5 && hours < 12 ? 'morning' : hours >= 12 && hours < 18 ? 'afternoon' : 'evening'
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([fetchTime(), fetchGeolocation(), fetchComment()])
        setTime(responses[0])
        setGeolocation(responses[1])
        setComment(responses[2])
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])

  return (
    <div
      className={`relative h-screen ${
        timeOfDay === 'morning' || timeOfDay === 'afternoon'
          ? 'bg-daytime-mobile md:bg-daytime-tablet xl:bg-daytime-desktop'
          : 'bg-nighttime-mobile md:bg-nighttime-tablet xl:bg-nighttime-desktop'
      } bg-no-repeat bg-cover`}
    >
      <Seo title="Frontend Mentor: Clock app" />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <main className="relative h-screen flex flex-col justify-between">
        <section
          className={`flex-grow grid place-items-center px-6 pt-8 pb-10 md:px-16 md:pt-20 md:pb-16 xl:pt-14 xl:pb-25`}
        >
          <div className="max-w-container w-full h-full flex flex-col justify-between">
            {comment && !showPanel && (
              <Comment author={comment.author} setComment={setComment}>
                {comment.text}
              </Comment>
            )}
            <div className="h-full flex justify-between items-end justify-self-end">
              <Time time={time} geolocation={geolocation} timeOfDay={timeOfDay} />
              <Button showPanel={showPanel} setShowPanel={setShowPanel} />
            </div>
          </div>
        </section>
        {showPanel && <Panel time={time} timeOfDay={timeOfDay} />}
      </main>
    </div>
  )
}

export default IndexPage
