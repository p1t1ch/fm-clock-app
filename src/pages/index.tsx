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

function IndexPage() {
  const [time, setTime] = useState<TimeData>()
  const [geolocation, setGeolocation] = useState<GeolocationData>()
  const [comment, setComment] = useState<CommentData>()

  const hours = time && new Date(time.datetime).getHours()

  useEffect(() => {
    // http://worldtimeapi.org/api/ip
    setTime({
      datetime: '2021-02-15T16:26:10.208788+03:00',
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
        !hours || (hours >= 5 && hours < 18)
          ? 'bg-daytime-mobile md:bg-daytime-tablet xl:bg-daytime-desktop'
          : 'bg-nighttime-mobile md:bg-nighttime-tablet xl:bg-nighttime-desktop'
      } bg-no-repeat bg-cover`}
    >
      <Seo title="Frontend Mentor: Clock app" />
      <main>
        <section>
          {comment && <Comment author={comment.author}>{comment.text}</Comment>}
          <Time time={time} geolocation={geolocation} />
          <Button isActive />
        </section>
        <Panel time={time} />
      </main>
    </div>
  )
}

export default IndexPage
