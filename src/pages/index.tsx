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
    const fetchData = async () => {
      try {
        const fetchTime = async () => {
          try {
            const res = await fetch('http://worldtimeapi.org/api/ip/')
            const data = await res.json()
            return data
          } catch (e) {
            console.error(e)
          }
        }

        const fetchGeolocation = async () => {
          try {
            const res = await fetch('http://freegeoip.app/json/')
            const data = await res.json()
            return data
          } catch (e) {
            console.error(e)
          }
        }

        const fetchComment = async () => {
          try {
            const res = await fetch(
              'https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json'
            )
            let data = await res.json()
            data = data[Math.floor(Math.random() * (data.length + 1))]
            return { text: data.en, author: data.author }
          } catch (e) {
            console.error(e)
          }
        }

        const responses = await Promise.all([fetchTime(), fetchGeolocation(), fetchComment()])

        setTime(responses[0])
        setGeolocation(responses[1])
        setComment(responses[2])
      } catch (e) {
        console.log(e)
      }
    }

    fetchData()
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
