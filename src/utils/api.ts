export const fetchTime = async () => {
  try {
    const res = await fetch('http://worldtimeapi.org/api/ip/')
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export const fetchGeolocation = async () => {
  try {
    const res = await fetch('http://freegeoip.app/json/')
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export const fetchComment = async () => {
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
