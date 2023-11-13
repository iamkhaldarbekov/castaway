import React from 'react'
import spotify from './../assets/icons/spotify.svg'
import c from './../assets/icons/c.svg'
import cloud from './../assets/icons/cloud.svg'
import podcast from './../assets/icons/podcast.svg'
import antenna from './../assets/icons/antenna.svg'

export default function Companies() {
  return (
    <ul className="items">
        <li><img src={spotify} alt="item" className="item" /></li>
        <li><img src={c} alt="item" className="item" /></li>
        <li><img src={cloud} alt="item" className="item" /></li>
        <li><img src={podcast} alt="item" className="item" /></li>
        <li><img src={antenna} alt="item" className="item" /></li>
    </ul>
  )
}
