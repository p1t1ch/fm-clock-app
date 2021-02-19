import React, { useEffect, useState } from 'react'
import Seo from '@/components/Seo'
import Comment from '@/components/Comment'
import Time from '@/components/Time'
import Panel from '@/components/Panel'
import Button from '@/components/Button'
import {
  fetchTime,
  fetchGeolocation,
  fetchComment,
  TimeData,
  TimeOfDay,
  GeolocationData,
  CommentData,
} from '@/utils/api'
import useInterval from '@/utils/useInterval'

function IndexPage() {
  const [time, setTime] = useState<TimeData>()
  const [geolocation, setGeolocation] = useState<GeolocationData>()
  const [comment, setComment] = useState<CommentData>()
  const [showPanel, setShowPanel] = useState(false)

  let timeOfDay: TimeOfDay | undefined
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

  useInterval(() => {
    if (!time) return
    const date = new Date()
    const localDate = new Date(date.getTime() - time.raw_offset)
    const iso = localDate.toISOString()
    setTime(time => ({ ...(time as TimeData), datetime: iso }))
  }, 1000)

  return (
    <div
      className={`relative h-screen grid ${
        timeOfDay === 'morning' || timeOfDay === 'afternoon'
          ? 'bg-daytime-mobile md:bg-daytime-tablet xl:bg-daytime-desktop'
          : timeOfDay === 'evening'
          ? 'bg-nighttime-mobile md:bg-nighttime-tablet xl:bg-nighttime-desktop'
          : ''
      } bg-no-repeat bg-cover bg-gray-dark overflow-hidden`}
    >
      <Seo title="Frontend Mentor: Clock app" />
      {time && timeOfDay && geolocation && comment && (
        <>
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <main
            className={`relative flex flex-col justify-between transform ${
              showPanel ? '-translate-y-panel-mobile md:-translate-y-panel-tablet xl:-translate-y-panel-desktop' : ''
            } transition-transform`}
          >
            <section
              className={`h-screen flex-grow grid place-items-center px-6 pt-8 pb-10 md:px-16 md:pt-20 md:pb-16 xl:py-14`}
            >
              <div className="max-w-container w-full h-full flex flex-col justify-between">
                {comment && (
                  <Comment author={comment.author} setComment={setComment}>
                    {comment.text}
                  </Comment>
                )}
                <div className="justify-self-end xl:flex xl:justify-between xl:items-end">
                  <Time
                    time={time}
                    geolocation={geolocation}
                    timeOfDay={timeOfDay}
                    className="mb-12 md:mb-20 xl:mb-0"
                  />
                  <Button showPanel={showPanel} setShowPanel={setShowPanel} />
                </div>
              </div>
            </section>
            <Panel time={time} timeOfDay={timeOfDay} aria-hidden={!showPanel} />
          </main>
        </>
      )}
    </div>
  )
}

export default IndexPage
