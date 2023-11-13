import React from 'react'
import './styles.scss'
import Stars from './../ui/Stars'

export default function Review({text, author}) {
  return (
    <div className="review">
        <Stars />
        <p className="review__text">{text}</p>
        <p className="review__author">{author}</p>
    </div>
  )
}
