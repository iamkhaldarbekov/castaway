import React from 'react'
import './styles.scss'
import Episode from './../components/Episode'
import main01 from './../assets/img/main01.png'
import main02 from './../assets/img/main02.png'
import main03 from './../assets/img/main03.png'
import Button from './../ui/Button'

export default function Main() {
  return (
    <main className="main">
      <div className="main__info">
        <h2 className="main__title">Latest episodes</h2>
        <Button text='View all episodes' type='button' />
      </div>
      <div className="main__episodes">
        <Episode img={main01} genre='Gear' ep='3' title='Should you get outboard audio gear?' subtitle='Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.' />
        <Episode img={main02} genre='Tips & Tricks' ep='2' title='Mic tricks to take you to the next level' subtitle='Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.' />
        <Episode img={main03} genre='Tips & Tricks' ep='1' title='The best microphone under $200' subtitle='With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.' />
      </div>
    </main>
  )
}
