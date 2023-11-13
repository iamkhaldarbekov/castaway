import React from 'react'
import './styles.scss'
import arrow from './../assets/icons/arrow.svg'
import img from './../assets/img/section.png'
import Updates from './../components/Updates'
import Review from './../components/Review'
import lines02 from './../assets/icons/lines02.svg'

export default function Section() {
  return (
    <section className="section">
        <img src={lines02} alt="lines" className="section__lines" />
        <div className="section__inner">
            <div className="section__info">
                <img src={arrow} alt="arrow" className="section__arrow" />
                <span style={{color: '#118DA8', fontSize: '18px', marginTop: '280px'}}>Meet your host</span>
                <h3 className="section__title">Jacob Paulaner</h3>
                <p className="section__subtitle">Jacob has a background in audio engineering, and has been podcasting since the early days.<br /><br />He’s here to help you level up your game by sharing everything he’s learned along the way.</p>
            </div>
            <img src={img} alt="img" className="section__img" />
        </div>
        <Updates />
        {/* <div className="section__reviews">
          <Review text='I can’t recommend this podcast enough' author='Betty Lacey' />
          <Review text='I’ve upped my game considerably since I started listening' author='Steven Blast' />
          <Review text='Every episode is a gem!' author='Jessica Knowl' />
        </div> */}
    </section>
  )
}
