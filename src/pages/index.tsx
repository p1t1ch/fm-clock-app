import React from 'react'
import Seo from '@/components/Seo'
import Comment from '@/components/Comment'
import Time from '@/components/Time'
import Panel from '@/components/Panel'
import Button from '@/components/Button'

// - [World Time API](http://worldtimeapi.org/) to set the time based on the visitor's IP adress. This API will also be used for additional data, like the day of the year shown in the expanded state.
// - [IP Geolocation API](https://freegeoip.app/) to set the city and country underneath the time
// - [Programming Quotes API](https://programming-quotes-api.herokuapp.com/) to generate random programming quotes.
//     - If the Programming Quotes API doesn't work, [here's a good alternative quote API](https://github.com/lukePeavey/quotable) you can use instead. It's not programming specific, but it will do the trick.

function IndexPage() {
  return (
    <div>
      <Seo title="Frontend Mentor: Clock app" />
      <main>
        <section>
          <Comment author="Ada Lovelace">
            The science of operations, as derived from mathematics more especially, is a science of itself, and has its
            own abstract truth and value.
          </Comment>
          <Time time="2020-01-14T11:37" location="London, UK" />
          <Button isActive />
        </section>
        <Panel timezone="Europe/London" yearDay={295} weekDay={5} weekNumber={42} />
      </main>
    </div>
  )
}

export default IndexPage
