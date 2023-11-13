import React from 'react'
import './styles.scss'

export default function Button({text, type}) {
  return (
    <button className="button" type={type}>{text}</button>
  )
}
