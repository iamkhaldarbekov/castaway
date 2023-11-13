import React from 'react'
import star from './../assets/icons/star.svg'

export default function Stars() {
  return (
    <ul className="stars">
        <li><img src={star} alt="star" className="star" /></li>
        <li><img src={star} alt="star" className="star" /></li>
        <li><img src={star} alt="star" className="star" /></li>
        <li><img src={star} alt="star" className="star" /></li>
        <li><img src={star} alt="star" className="star" /></li>
    </ul>
  )
}
