import React from 'react'
import Button from './../ui/Button'

export default function Episode({genre, img, ep, title, subtitle}) {
  return (
    <div className="card">
        <img src={img} alt="img" className="card__img" />
        <div className="card__info">
            <span className="card__genre">{genre}</span>
            <p className="card__episode">Episode {ep}</p>
            <h3 className="card__title">{title}</h3>
            <p className="card__subtitle">{subtitle}</p>
            <Button text='View Episode Details' type='button' />
        </div>
    </div>
  )
}
