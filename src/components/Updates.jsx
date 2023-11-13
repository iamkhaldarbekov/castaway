import React from 'react'
import './styles.scss'
import Button from './../ui/Button'

export default function Updates() {
  return (
    <div className="updates">
      <div className="updates__info">
        <span style={{color: '#118DA8', fontSize: '18px'}}>Email Newsletter</span>
        <h3 className="updates__title">Subscribe for updates</h3>
      </div>
      <div className="updates__email">
        <input type="text" className="updates__email-item" placeholder='Name' />
        <input type="email" className="updates__email-item" placeholder='Email' />
        <Button text='Submit' type='submit' />
      </div>
    </div>
  )
}
