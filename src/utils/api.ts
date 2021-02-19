export interface TimeData {
  datetime: string
  timezone: string
  day_of_week: number
  day_of_year: number
  week_number: number
  raw_offset: number
  abbreviation: string
}

export type TimeOfDay = 'morning' | 'afternoon' | 'evening'

export interface GeolocationData {
  country_name: string
  city: string
}

export interface CommentData {
  text: string
  author: string
}

export const fetchTime = async (): Promise<TimeData | undefined> => {
  try {
    const res = await fetch('https://worldtimeapi.org/api/ip/')
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export const fetchGeolocation = async (): Promise<GeolocationData | undefined> => {
  try {
    const res = await fetch('https://freegeoip.app/json/')
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export const fetchComment = async (): Promise<CommentData | undefined> => {
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
