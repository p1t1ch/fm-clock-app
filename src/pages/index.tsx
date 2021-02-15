import React, { useEffect, useState } from 'react'
import Seo from '@/components/Seo'
import Comment from '@/components/Comment'
import Time from '@/components/Time'
import Panel from '@/components/Panel'
import Button from '@/components/Button'

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

  let timeOfDay: TimeOfDay
  if (time) {
    const hours = time && new Date(time.datetime).getHours()
    timeOfDay = hours >= 5 && hours < 12 ? 'morning' : hours >= 12 && hours < 18 ? 'afternoon' : 'evening'
  }

  useEffect(() => {
    // http://worldtimeapi.org/api/ip
    setTime({
      datetime: '2021-02-15T18:26:10.208788+03:00',
      timezone: 'Europe/Moscow',
      day_of_week: 1,
      day_of_year: 46,
      week_number: 7,
    })
    // https://freegeoip.app/json/
    setGeolocation({
      country_name: 'Россия',
      city: 'Москва',
    })
    // https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json
    // json = json[Math.floor(Math.random() * (json.length + 1))];
    // { text: json["en"], author: json["author"] }
    setComment({
      text:
        'The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.',
      author: 'Ada Lovelace',
    })
  }, [])

  return (
    <div
      className={`min-h-screen ${
        timeOfDay === 'morning' || timeOfDay === 'afternoon'
          ? 'bg-daytime-mobile md:bg-daytime-tablet xl:bg-daytime-desktop'
          : 'bg-nighttime-mobile md:bg-nighttime-tablet xl:bg-nighttime-desktop'
      } bg-no-repeat bg-cover`}
    >
      <Seo title="Frontend Mentor: Clock app" />
      <main>
        <section className="grid place-items-center px-6 pt-8 pb-10 md:px-16 md:pt-20 md:pb-16 xl:pt-14 xl:pb-25">
          <div className="max-w-container w-full flex flex-col justify-between">
            {comment && <Comment author={comment.author}>{comment.text}</Comment>}
            <div className="flex justify-between">
              <Time time={time} geolocation={geolocation} timeOfDay={timeOfDay} />
              <Button isActive />
            </div>
          </div>
        </section>
        <Panel time={time} timeOfDay={timeOfDay} />
      </main>
    </div>
  )
}

export default IndexPage
