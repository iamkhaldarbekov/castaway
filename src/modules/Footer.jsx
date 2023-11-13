import React from 'react'
import './styles.scss'
import Companies from './../ui/Companies'
import logo from './../assets/icons/logo.svg'
import twitter from './../assets/icons/twitter.svg'
import instagram from './../assets/icons/instagram.svg'
import facebook from './../assets/icons/facebook.svg'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__info">
            <img src={logo} alt="logo" className="footer__logo" />
            <ul className="footer__socials">
                <li><a href="#"><img src={instagram} alt="logo" className="footer__socials-item" /></a></li>
                <li><a href="#"><img src={twitter} alt="logo" className="footer__socials-item" /></a></li>
                <li><a href="#"><img src={facebook} alt="logo" className="footer__socials-item" /></a></li>
            </ul>
        </div>
        <ul className="footer__links">
            <li><a href="#" className="footer__links-item">Home</a></li>
            <li><a href="#" className="footer__links-item">About</a></li>
            <li><a href="#" className="footer__links-item">Episodes</a></li>
            <li><a href="#" className="footer__links-item">Contact</a></li>
        </ul>
        <ul className="footer__links">
            <li><a href="#" className="footer__links-item">Style Guide</a></li>
            <li><a href="#" className="footer__links-item">Instructions</a></li>
            <li><a href="#" className="footer__links-item">Changelog</a></li>
            <li><a href="#" className="footer__links-item">Credit</a></li>
            <li><a href="#" className="footer__links-item">Powered by Webflow</a></li>
            <li><a href="#" className="footer__links-item">Licenses</a></li>
        </ul>
        <Companies />
    </footer>
  )
}
