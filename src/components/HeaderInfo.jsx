import React from 'react'
import './styles.scss'
import header from './../assets/img/header.png'
import Companies from './../ui/Companies'
import lines01 from './../assets/icons/lines01.svg'

export default function HeaderInfo() {
  return (
    <div className="info">
        <img src={header} alt="header" className="info__img" />
        <img src={lines01} alt="lines" className="info__lines" />
        <div className="info__text">
          <h3 className="info__title">Take your podcast to the next <b>level</b></h3>
          <div className="info__companies">
            <p className="companies__title">Listen on</p>
            <Companies />
          </div>
        </div>
    </div>
  )
}
