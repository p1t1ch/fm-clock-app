import React, { useEffect, useState } from 'react'
import Seo from '@/components/Seo'
import Comment from '@/components/Comment'
import Time from '@/components/Time'
import Panel from '@/components/Panel'
import Button from '@/components/Button'

// - [World Time API](http://worldtimeapi.org/) to set the time based on the visitor's IP adress. This API will also be used for additional data, like the day of the year shown in the expanded state.
// - [IP Geolocation API](https://freegeoip.app/) to set the city and country underneath the time
// - [Programming Quotes API](https://programming-quotes-api.herokuapp.com/) to generate random programming quotes.
//     - If the Programming Quotes API doesn't work, [here's a good alternative quote API](https://github.com/lukePeavey/quotable) you can use instead. It's not programming specific, but it will do the trick.

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
    <div>
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
